import React from "react";

// ChakraUI
import { Box, BoxProps } from "@chakra-ui/react";

const transforms = {
  beforeHover: {
    transform: `translate3d(0, 0, 0)`,
    transition: `transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
  },
  onHover: {
    transform: `translate3d(0, -8px, 0)`,
    boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
  },
};

interface MotionBoxProps extends BoxProps {}

export default function MotionBox({ children, ...rest }: MotionBoxProps) {
  return (
    <Box
      {...rest}
      transform={transforms.beforeHover.transform}
      transition={transforms.beforeHover.transition}
      _hover={{
        transform: transforms.onHover.transform,
        boxShadow: transforms.onHover.boxShadow,
      }}
    >
      {children}
    </Box>
  );
}
