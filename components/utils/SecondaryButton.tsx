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
      <Button
        {...rest}
        bg="#3fa1ec"
        color="white"
        variant="solid"
        _hover={{
          bg: "#3fa1ec",
        }}
      >
        {children}
      </Button>
    </MotionBox>
  );
}
