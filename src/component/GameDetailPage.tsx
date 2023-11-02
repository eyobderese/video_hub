import { useParams } from "react-router-dom";
import useGameD from "../hooks/useGameD";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

import ExpandableText from "./ExpandebleText";

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
    </>
  );
};

export default GameDetailPage;
