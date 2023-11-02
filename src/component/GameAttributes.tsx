import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CriticScore from "./CriticScore";
import DefinationItem from "./DefinationItem";
import { Game } from "../Entity/Game";

interface Prop {
  game: Game | undefined;
}

const GameAttributes = ({ game }: Prop) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinationItem term="Platform">
        {" "}
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItem>

      <DefinationItem term="MetaScore">
        <CriticScore score={game?.metacritic || 0} />
      </DefinationItem>

      <DefinationItem term="Genres">
        {game?.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefinationItem>

      <DefinationItem term="Publisher">
        {game?.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
