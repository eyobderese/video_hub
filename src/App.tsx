import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, GridItem, Show } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGame";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [platform, setPlatform] = useState<Platform | null>(null);

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
          <GenresList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main" marginTop={10}>
        <PlatformSelector
          onSelcet={(platform) => setPlatform(platform)}
          platform={platform}
        />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={platform} />
      </GridItem>
    </Grid>
  );
}

export default App;
