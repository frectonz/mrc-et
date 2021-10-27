import { ReactNode } from "react";

// Chakra UI
import {
  Drawer,
  Heading,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
} from "@chakra-ui/react";

import { CloseMenuButton } from "./MenuButton";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function MenuDrawer({
  isOpen,
  onClose,
  children,
}: MenuDrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="full" placement="bottom">
      <DrawerContent pt={100}>
        <DrawerHeader display="flex" justifyContent="space-between">
          <Heading size="md" lineHeight="2.5rem">
            Menu
          </Heading>
          <CloseMenuButton onClick={onClose} />
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
