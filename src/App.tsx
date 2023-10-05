import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, GridItem, Show } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";

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
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
