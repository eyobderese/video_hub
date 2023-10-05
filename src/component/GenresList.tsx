import useGenera from "../hooks/useGenres";
import { List, ListItem } from "@chakra-ui/react";

const GenresList = () => {
  const { Data } = useGenera();

  return (
    <List>
      {Data.map((genre) => (
        <ListItem>{genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenresList;
