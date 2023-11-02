import { useParams } from "react-router-dom";
import useGameD from "../hooks/useGameD";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

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
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
