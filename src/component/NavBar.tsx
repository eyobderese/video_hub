import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo (1).webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} width="66px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
