import React from "react";

// Components
import MotionBox from "./MotionBox";

// ChakraUI
import { Button, ButtonProps } from "@chakra-ui/react";

interface SecondaryButton extends ButtonProps {}

export default function SecondaryButton({
  bg,
  children,
  ...rest
}: SecondaryButton) {
  return (
    <MotionBox>
      <Button
        {...rest}
        color="black"
        variant="solid"
        bg={bg || "brand.secondary"}
      >
        {children}
      </Button>
    </MotionBox>
  );
}
