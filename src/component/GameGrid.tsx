import { Box, Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGame, { Game } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import { FatchResponse } from "../services/api-client";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery | null;
}

function GameGrid({ gameQuery }: Props) {
  const {
    data: Data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchGameCount = Data?.pages.reduce(
    (total, each) => total + each.results.length,
    0
  );

  return (
    <Box padding="10px">
      {error && <p>{error.message}</p>}

      <InfiniteScroll
        dataLength={!!fetchGameCount ? fetchGameCount : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {Data?.pages.map((page: FatchResponse<Game>) => (
            <React.Fragment>
              {page?.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
}

export default GameGrid;
