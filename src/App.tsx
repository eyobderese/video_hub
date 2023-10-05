import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector, { Sorter } from "./component/SortSelector";

export interface GameQuery {
  genre: Genre;
  platform: Platform;
  sortOrder: Sorter;
  element: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav "  "aside  main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSubmite={(element) => setGameQuery({ ...gameQuery, element })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" marginTop={10}>
          <GenresList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="main" marginTop={10}>
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={2}>
            <PlatformSelector
              onSelcet={(platform) => setGameQuery({ ...gameQuery, platform })}
              platform={gameQuery.platform}
            />
          </Box>
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sorter1={gameQuery.sortOrder}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
