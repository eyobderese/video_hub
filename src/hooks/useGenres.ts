import { useQuery } from "@tanstack/react-query";
import useData, { FatchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import { genres } from "../assets/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenera = () => {
  const { data } = useQuery({
    queryKey: ["genre"],
    queryFn: () =>
      apiClient.get<FatchResponse<Genre>>("/genres").then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000,

    initialData: genres,
  });

  return { data };
};

export default useGenera;
