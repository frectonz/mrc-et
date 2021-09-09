import { Box, BoxProps } from "@chakra-ui/react";

export default function SkewBox({ children }: BoxProps) {
  return (
    <Box
      _before={{
        content: "''",
        position: "absolute",
        top: 0.2,
        left: 0,
        right: 0,
        bottom: 0.2,
        zIndex: -50,
        background: "#3fa1ec",
        transform: "skew(-4deg,-4deg)",
        transition: "500ms",
      }}
    >
      {children}
    </Box>
  );
}
