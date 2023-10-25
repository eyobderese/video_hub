import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/usePlatform";

interface Props {
  onSelcet: (platform: Platform) => void;
  platformID?: number;
}

const PlatformSelector = ({ onSelcet, platformID }: Props) => {
  const { data: Data, error } = usePlatform();
  const platform = Data.results.find((p) => p.id == platformID);
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} alignSelf="left">
        {platform ? platform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {Data?.results.map((data) => (
          <MenuItem onClick={() => onSelcet(data)}>{data.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
