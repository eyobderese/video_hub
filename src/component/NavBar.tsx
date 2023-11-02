import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo (1).webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <HStack>
      <Link to={"/"}>
        <Image src={logo} width="66px" objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
