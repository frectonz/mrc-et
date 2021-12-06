import React from "react";

// Components
import MotionBox from "./MotionBox";

// ChakraUI
import { Button, ButtonProps } from "@chakra-ui/react";

interface SecondaryButton extends ButtonProps {}

export default function SecondaryButton({
  children,
  ...rest
}: SecondaryButton) {
  return (
    <MotionBox>
      <Button {...rest} bg="brand.secondary" color="black" variant="solid">
        {children}
      </Button>
    </MotionBox>
  );
}
