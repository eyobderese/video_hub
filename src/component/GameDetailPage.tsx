import { useParams } from "react-router-dom";
import APIClient from "../services/api-client";
import { Game } from "../hooks/useGame";
import useGameD from "../hooks/useGameD";
import { Box, Heading, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameD(slug!);

  return (
    <Box padding={5}>
      <Heading paddingBottom={4}>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
