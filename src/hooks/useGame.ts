import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FatchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (gameQuery: GameQuery | null) =>
  useQuery<FatchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FatchResponse<Game>>("/games", {
          params: {
            genres: gameQuery?.genre?.id,
            parent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery?.sortOrder?.value,
            search: gameQuery?.element,
          },
        })
        .then((res) => res.data),
  });

export default useGame;
