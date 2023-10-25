import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenera from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data } = useGenera();
  const genre = data.results.find((genere) => genere.id === gameQuery.genreID);

  const { data: Data } = usePlatform();
  const platform = Data.results.find((p) => p.id == gameQuery.platformID);

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
