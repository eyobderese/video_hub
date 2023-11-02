import useGenera from "../hooks/useGenres";
import { Genre } from "../Entity/Genre";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQuery from "../store";

const GenresList = () => {
  const { data: Data } = useGenera();

  const selectedGenreID = useGameQuery((s) => s.gameQuery.genreID);
  const setSelectedGenreID = useGameQuery((s) => s.setGenreID);

  return (
    <>
      <Heading fontSize={"2xl"} textAlign={"left"} marginBottom={4}>
        Genres
      </Heading>
      <List>
        {Data?.results.map((genre) => (
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => setSelectedGenreID(genre.id)}
                fontWeight={selectedGenreID === genre.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
