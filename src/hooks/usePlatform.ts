import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { platform } from "../assets/platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () => apiClient.getAll(),

    staleTime: ms("24h"),
    initialData: platform,
  });

export default usePlatform;
