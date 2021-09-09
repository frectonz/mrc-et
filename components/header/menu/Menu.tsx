// ChakraUI
import { Box, useDisclosure, useBreakpointValue } from "@chakra-ui/react";

// Components
import Controls from "../controls/Controls";
import MenuDrawer from "./MenuDrawer";
import { OpenMenuButton } from "./MenuButton";
import { Navigation } from "../navigation/Navigation";
import { ColumnNavigation } from "../navigation/ColumnNavigation";

// Interfaces
import { NavLink } from "../../../interfaces/NavLink";

interface MenuProps {
  links: NavLink[];
  actionButtonLabel: string;
}

export default function Menu({ links, actionButtonLabel }: MenuProps) {
  const showMenu = useBreakpointValue({
    xl: false,
    lg: false,
    md: false,
    sm: true,
    xs: true,
    base: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return showMenu ? (
    <>
      <OpenMenuButton onClick={onOpen} />
      <MenuDrawer isOpen={isOpen} onClose={onClose}>
        <Box>
          <Controls actionButtonLabel={actionButtonLabel} />
        </Box>
        <ColumnNavigation links={links} />
      </MenuDrawer>
    </>
  ) : (
    <>
      <Navigation links={links} />
      <Controls actionButtonLabel={actionButtonLabel} />
    </>
  );
}
