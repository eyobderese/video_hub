import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/usePlatform";
import usePlatfoms from "../hooks/usePlatfoms";
import useGameQuery from "../store";

const PlatformSelector = () => {
  const setPlatformId = useGameQuery((s) => s.setPlatformId);
  const platformID = useGameQuery((s) => s.gameQuery.platformID);

  const { platform, Data, error } = usePlatfoms(platformID);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} alignSelf="left">
        {platform ? platform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {Data?.results.map((data) => (
          <MenuItem onClick={() => setPlatformId(data.id)}>
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
