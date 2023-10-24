import { useQuery } from "@tanstack/react-query";
import useData, { FatchResponse } from "./useData";
import apiClient from "../services/api-client";
import { platform } from "../assets/platform";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient
        .get<FatchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    initialData: platform,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatform;
