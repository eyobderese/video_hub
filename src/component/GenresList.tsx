import React from "react";
import useGenera from "../hooks/useGenres";
import { List, ListItem } from "@chakra-ui/react";

const GenresList = () => {
  const { genres } = useGenera();

  return (
    <List>
      {genres.map((genre) => (
        <ListItem>{genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenresList;
