import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ms from "ms";
import { FatchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import useGameQuery from "../store";
import { Game } from "../Entity/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);

  return useInfiniteQuery<FatchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreID,
          parent_platforms: gameQuery?.platformID,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return allPage.length + 1;
    },

    staleTime: ms("24h"),
  });
};

export default useGame;
