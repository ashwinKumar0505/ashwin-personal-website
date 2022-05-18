import { Flex } from "@chakra-ui/react";
import { HEADER_DATA } from "../../constants/header-data";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <Flex
      p={5}
      backgroundColor="white"
      position="fixed"
      zIndex={50}
      top={0}
      width="100%"
      boxShadow="0 0 5px 0 rgba(0,0,0,0.1)"
      justifyContent="flex-end"
    >
      {HEADER_DATA.map((nav) => {
        return <NavLink name={nav.name} scrollToId={nav.scrollToId} />;
      })}
    </Flex>
  );
};

export default Header;
