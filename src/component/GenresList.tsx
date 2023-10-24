import useGenera, { Genre } from "../hooks/useGenres";
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

interface Props {
  onSelectGenre: (genreID: Genre) => void;
  selectedGenreID?: number;
}

const GenresList = ({ onSelectGenre, selectedGenreID }: Props) => {
  const { data: Data } = useGenera();

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
                onClick={() => onSelectGenre(genre)}
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
