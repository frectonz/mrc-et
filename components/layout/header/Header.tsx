// ChakraUI
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

// Components
import Logo from "./Logo";
import Menu from "./menu/Menu";
import MainContainer from "../../utils/MainContainer";

// Interfaces
import { NavLink } from "../../../interfaces/NavLink";

interface HeaderProp {
  links: NavLink[];
  actionButtonLabel: string;
}

export default function Header({ links, actionButtonLabel }: HeaderProp) {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box position="fixed" top="0" zIndex="banner" width="100vw">
      <MainContainer bg={bg} boxShadow="md">
        <Flex py={2} as="header" align="center" justify="space-between">
          <Logo />
          <Menu links={links} actionButtonLabel={actionButtonLabel} />
        </Flex>
      </MainContainer>
    </Box>
  );
}
