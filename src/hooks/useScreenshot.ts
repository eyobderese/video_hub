import ms from "ms";
import Trailer from "../Entity/Trailer";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import Screenshot from "../Entity/Screenshot";

interface Props {
  gameId: number;
}

const useScreenshot = ({ gameId }: Props) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll(),

    staleTime: ms("24h"),
  });
};

export default useScreenshot;
