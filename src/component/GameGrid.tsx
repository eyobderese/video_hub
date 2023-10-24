import { Button, SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGame, { Game } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import { FatchResponse } from "../services/api-client";

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

  return (
    <>
      {error && <p>{error.message}</p>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={3}>
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

      {hasNextPage ? (
        <Button onClick={() => fetchNextPage()}>
          {" "}
          {isFetchingNextPage ? "Ladding..." : "Load More"}{" "}
        </Button>
      ) : null}
    </>
  );
}

export default GameGrid;
