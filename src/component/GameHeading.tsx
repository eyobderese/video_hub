import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenera from "../hooks/useGenres";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data } = useGenera();
  const genre = data.results.find((genere) => genere.id === gameQuery.genreID);
  let Heading = `${gameQuery.platform?.name ? gameQuery.platform?.name : ""} ${
    genre?.name ? genre?.name : ""
  }  Game `;
  return (
    <Text fontWeight="bold" fontSize="3xl">
      {Heading}
    </Text>
  );
};

export default GameHeading;
