import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { Data, error, isLoding } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={3}>
        {isLoding &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {Data?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
