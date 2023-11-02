import ms from "ms";
import Trailer from "../Entity/Trailer";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Props {
  gameId: number;
}

const useTrailer = ({ gameId }: Props) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: () => apiClient.getAll(),

    staleTime: ms("24h"),
  });
};

export default useTrailer;
