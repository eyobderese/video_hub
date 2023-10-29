import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQuery from "../store";




const SortSelector = () => {
  const sortOrder = useGameQuery(s=>s.gameQuery.sortOrder)
  
  const setSortOrder = useGameQuery(s=>s.serSortOrder)


  const sortOrders = [
    { value: "", lable: "Relevence" },
    { value: "-added", lable: "Date added " },
    { value: "-released", lable: "Release date" },
    { value: "name", lable: "Name" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];


  const selectedSortOrder = sortOrders.find(sort => sort.value===sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} alignSelf="left">
        OrderBy: { selectedSortOrder?.lable || "Relevence"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sorter) => (
          <MenuItem
            onClick={() => {
              setSortOrder(sorter.value);
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
