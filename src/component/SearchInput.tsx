import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { InputHTMLAttributes, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQuery((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
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
