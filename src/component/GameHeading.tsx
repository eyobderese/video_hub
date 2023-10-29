import { Text } from "@chakra-ui/react";
import useGenera from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import usePlatfoms from "../hooks/usePlatfoms";
import useGenre from "../hooks/useGenre";
import useGameQuery from "../store";

const GameHeading = () => {
  const genreID = useGameQuery((s) => s.gameQuery.genreID);
  const platformID = useGameQuery((s) => s.gameQuery.platformID);

  const { genre } = useGenre(genreID);

  const { platform } = usePlatfoms(platformID);

  let Heading = `${platform?.name ? platform?.name : ""} ${
    genre?.name ? genre?.name : ""
  }  Game `;
  return (
    <Text fontWeight="bold" fontSize="3xl">
      {Heading}
    </Text>
  );
};

export default GameHeading;
