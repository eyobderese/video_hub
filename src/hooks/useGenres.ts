import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { genres } from "../assets/genres";
import APIClient from "../services/api-client";
import { Genre } from "../Entity/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenera = () => {
  const { data } = useQuery({
    queryKey: ["genre"],
    queryFn: () => apiClient.getAll(),

    staleTime: ms("24h"),

    initialData: genres,
  });

  return { data };
};

export default useGenera;
