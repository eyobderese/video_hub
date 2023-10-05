import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { InputHTMLAttributes, useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSubmite: (element: string) => void;
}

const SearchInput = ({ onSubmite }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) return onSubmite(ref.current.value);
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
