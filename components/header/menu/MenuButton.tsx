import { MouseEventHandler } from "react";

// Icons
import { HiOutlineMenu, HiX } from "react-icons/hi";

// ChakraUI
import { Button, ButtonProps } from "@chakra-ui/react";

interface MenuButtonProps extends ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function OpenMenuButton({ onClick, ...rest }: MenuButtonProps) {
  return (
    <Button {...rest} variant="outline" onClick={onClick}>
      <HiOutlineMenu fontSize="2rem" />
    </Button>
  );
}

export function CloseMenuButton({ onClick, ...rest }: MenuButtonProps) {
  return (
    <Button {...rest} variant="ghost" onClick={onClick}>
      <HiX fontSize="1.8rem" />
    </Button>
  );
}
