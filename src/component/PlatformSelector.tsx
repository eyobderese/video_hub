import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGame";

interface Props {
  onSelcet: (platform: Platform) => void;
  platform: Platform | null;
}

const PlatformSelector = ({ onSelcet, platform }: Props) => {
  const { Data, error } = usePlatform();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} alignSelf="left">
        {platform ? platform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {Data.map((data) => (
          <MenuItem onClick={() => onSelcet(data)}>{data.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
