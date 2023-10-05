import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo (1).webp";
import ColorModeSwitch from "./ColorModeSwitch";
import React from "react";

function NavBar() {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} width="66px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
