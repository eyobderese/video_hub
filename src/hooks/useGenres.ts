import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FatchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenera = () => {
  const [genres, setGame] = useState<Genre[]>([]);
  const [error, setError] = useState();
  const [isLoding, setLoding] = useState(true);

  useEffect(() => {
    const controler = new AbortController();
    setLoding(true);
    apiClient
      .get<FatchGenresResponse>("/genres", { signal: controler.signal })
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

  return { genres, error, isLoding };
};

export default useGenera;
