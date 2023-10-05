import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius="20px"
        placeholder="search game... "
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
