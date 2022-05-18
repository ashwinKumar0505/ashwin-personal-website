import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavContext } from "../../context/NavContest";

const NavLink = ({
  name,
  scrollToId,
}: {
  name: string;
  scrollToId: string;
}) => {
  const { activeNav, updateActiveNav } = useNavContext();

  const handleClick = () => {
    updateActiveNav(name);
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id={name}
      marginRight={5}
      marginLeft={5}
      onClick={handleClick}
      cursor="pointer"
      borderBottom="2px solid"
      _hover={{
        borderBottomColor: "blue.500",
      }}
      borderBottomColor={activeNav === name ? "blue.500" : "white"}
    >
      {name}
    </Box>
  );
};

export default NavLink;
