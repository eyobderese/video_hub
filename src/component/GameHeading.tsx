import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenera from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import usePlatfoms from "../hooks/usePlatfoms";
import useGenre from "../hooks/useGenre";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { genre } = useGenre(gameQuery.genreID);

  const { platform } = usePlatfoms(gameQuery.platformID);

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
