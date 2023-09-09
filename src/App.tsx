import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, GridItem, Show } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav "  "aside  main"`,
      }}
    >
      <GridItem area="nav" bg={"red"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg={"blue"}>
          aside
        </GridItem>
      </Show>

      <GridItem area="main" bg={"yellow"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
