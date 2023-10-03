import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

function GameGrid() {
  const { game, error } = useGame();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid column={3} spacing={10}>
        {game.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
