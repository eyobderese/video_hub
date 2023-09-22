import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      {colorMode == "dark" ? (
        <Text>Dark Mood</Text>
      ) : (
        <Text color="black">Light Mood</Text>
      )}
    </HStack>
  );
}

export default ColorModeSwitch;
