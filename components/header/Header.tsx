// ChakraUI
import { Flex } from "@chakra-ui/react";

// Components
import Logo from "./Logo";
import Menu from "./menu/Menu";
import MainContainer from "../utils/MainContainer";

// Interfaces
import { NavLink } from "../../interfaces/NavLink";

interface HeaderProp {
  links: NavLink[];
  logoImage: string;
  actionButtonLabel: string;
}

export default function Header({
  links,
  logoImage,
  actionButtonLabel,
}: HeaderProp) {
  return (
    <MainContainer>
      <Flex py={2} as="header" align="center" justify="space-between">
        <Logo logoImage={logoImage} />
        <Menu links={links} actionButtonLabel={actionButtonLabel} />
      </Flex>
    </MainContainer>
  );
}
