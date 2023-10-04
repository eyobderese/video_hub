import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FatchGameResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState();
  const [isLoding, setLoding] = useState(true);

  useEffect(() => {
    const controler = new AbortController();
    setLoding(true);
    apiClient
      .get<FatchGameResponse>("/games", { signal: controler.signal })
      .then((res) => {
        setGame(res.data.results);
        setLoding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoding(false);
      });

    return () => controler.abort();
  }, []);

  return { game, error, isLoding };
};

export default useGame;
