import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { InputHTMLAttributes, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../store";

const SearchInput = () => {
  const setSearchText = useGameQuery((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) return setSearchText(ref.current.value);
      }}
    >
      <InputGroup width={1000}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius="20px"
          placeholder="search game... "
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
