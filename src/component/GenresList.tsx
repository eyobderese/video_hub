import useGenera, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { Data } = useGenera();

  return (
    <List>
      {Data.map((genre) => (
        <ListItem paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant="link"
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
