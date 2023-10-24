import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FatchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [Data, setGame] = useState<T[]>([]);
  const [error, setError] = useState();
  const [isLoding, setLoding] = useState(true);

  useEffect(
    () => {
      const controler = new AbortController();
      setLoding(true);
      apiClient
        .get<FatchResponse<T>>(endPoint, {
          signal: controler.signal,
          ...requestConfig,
        })
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
    },
    deps ? [...deps] : []
  );

  return { Data, error, isLoding };
};

export default useData;
