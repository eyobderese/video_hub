import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo (1).webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSubmite: (element: string) => void;
}

function NavBar({ onSubmite }: Props) {
  return (
    <HStack>
      <Image src={logo} width="66px" />
      <SearchInput onSubmite={(element: string) => onSubmite(element)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
