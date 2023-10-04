import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FatchGameResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const controler = new AbortController();
    apiClient
      .get<FatchGameResponse>("/games", { signal: controler.signal })
      .then((res) => setGame(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controler.abort();
  }, []);

  return { game, error };
};

export default useGame;
