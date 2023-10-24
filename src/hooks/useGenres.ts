import { useQuery } from "@tanstack/react-query";
import { genres } from "../assets/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");

const useGenera = () => {
  const { data } = useQuery({
    queryKey: ["genre"],
    queryFn: () => apiClient.getAll(),

    staleTime: 24 * 60 * 60 * 1000,

    initialData: genres,
  });

  return { data };
};

export default useGenera;
