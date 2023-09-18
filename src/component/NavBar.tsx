import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import React from "react";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} />
      <Text>Nav Bar</Text>
    </HStack>
  );
}

export default NavBar;
