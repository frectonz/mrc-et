// ChakraUI
import { Box, useDisclosure, useBreakpointValue } from "@chakra-ui/react";

// Components
import MenuDrawer from "./MenuDrawer";
import Controls from "../controls/Controls";
import { OpenMenuButton } from "./MenuButton";
import { Navigation } from "../navigation/Navigation";
import { ColumnNavigation } from "../navigation/ColumnNavigation";

// Interfaces
import { NavLink } from "../../../../interfaces/NavLink";

interface MenuProps {
  links: NavLink[];
  actionButtonLabel: string;
}

export default function Menu({ links, actionButtonLabel }: MenuProps) {
  const showMenu = useBreakpointValue({
    xl: false,
    lg: false,
    md: true,
    sm: true,
    xs: true,
    base: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return showMenu ? (
    <>
      <OpenMenuButton onClick={onOpen} />
      <MenuDrawer isOpen={isOpen} onClose={onClose}>
        <Box pb={5}>
          <Controls
            closeDrawer={onClose}
            actionButtonLabel={actionButtonLabel}
          />
        </Box>
        <ColumnNavigation links={links} closeDrawer={onClose} />
      </MenuDrawer>
    </>
  ) : (
    <>
      <Navigation links={links} />
      <Controls actionButtonLabel={actionButtonLabel} closeDrawer={() => {}} />
    </>
  );
}
