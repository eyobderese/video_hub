import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FatchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";
import APIClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGame = (gameQuery: GameQuery | null) =>
  useInfiniteQuery<FatchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder?.value,
          search: gameQuery?.element,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return allPage.length + 1;
    },
  });

export default useGame;
