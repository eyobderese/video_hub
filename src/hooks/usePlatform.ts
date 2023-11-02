import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { platform } from "../assets/platform";
import { Platform } from "../Entity/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () => apiClient.getAll(),

    staleTime: ms("24h"),
    initialData: platform,
  });

export default usePlatform;
