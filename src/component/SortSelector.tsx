import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface Sorter {
  value: string;
  lable: string;
}

interface Props {
  onSelectSortOrder: (sortOrder: Sorter) => void;
  sorter1: Sorter;
}

const SortSelector = ({ onSelectSortOrder, sorter1 }: Props) => {
  const sortOrder = [
    { value: "", lable: "Relevence" },
    { value: "-added", lable: "Date added " },
    { value: "-released", lable: "Release date" },
    { value: "name", lable: "Name" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} alignSelf="left">
        OrderBy: {sorter1?.lable || "Relevence"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((sorter) => (
          <MenuItem
            onClick={() => {
              onSelectSortOrder(sorter);
            }}
          >
            {sorter.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
