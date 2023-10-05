import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let Heading = `${gameQuery.platform?.name ? gameQuery.platform?.name : ""} ${
    gameQuery.genre?.name ? gameQuery.genre?.name : ""
  }  Game `;
  return (
    <Text fontWeight="bold" fontSize="3xl">
      {Heading}
    </Text>
  );
};

export default GameHeading;
