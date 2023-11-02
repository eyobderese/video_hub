import { useParams } from "react-router-dom";
import useGameD from "../hooks/useGameD";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import ExpandableText from "./ExpandebleText";
import DefinationItem from "./DefinationItem";
import { platform } from "../assets/platform";
import CriticScore from "./CriticScore";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshot from "./GameScreenshoot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameD(slug!);
  if (error) {
    throw new Error("error from fatching data");
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading paddingBottom={4}>{game?.name}</Heading>
      <ExpandableText mytext={game?.description_raw} />
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <GameAttributes game={game} />
        <GameTrailer gameId={game!.id} />
      </SimpleGrid>
      <GameScreenshot gameId={game!.id} />
    </>
  );
};

export default GameDetailPage;
