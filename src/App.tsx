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
import { Platform } from "./hooks/usePlatform";
import GameHeading from "./component/GameHeading";
import SortSelector from "./component/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav "  "aside  main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" marginTop={10}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area="main" marginTop={10}>
        <GameHeading />

        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={2}>
            <PlatformSelector />
          </Box>
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
