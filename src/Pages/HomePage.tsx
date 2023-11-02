import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../component/GameGrid";
import GameHeading from "../component/GameHeading";
import GenresList from "../component/GenresList";
import PlatformSelector from "../component/PlatformSelector";
import SortSelector from "../component/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside  main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" marginTop={10} marginLeft={4}>
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
};

export default HomePage;
