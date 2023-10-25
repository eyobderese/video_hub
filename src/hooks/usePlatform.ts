import { useQuery } from "@tanstack/react-query";

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

    staleTime: 24 * 60 * 60 * 1000,
    initialData: platform,
  });

export default usePlatform;
