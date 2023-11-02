import { useQuery } from "@tanstack/react-query";
import React from "react";
import APIClient from "../services/api-client";
import Game from "../Entity/Game";

const api = new APIClient<Game>("/games");

const useGameD = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => api.get(slug),
  });

export default useGameD;
