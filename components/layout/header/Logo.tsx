// NextJs
import NextLink from "next/link";

// ChakraUI
import { Box, Image, useColorMode } from "@chakra-ui/react";

export default function Logo() {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "none" : "white";

  return (
    <Box p={1} bg={bg} borderRadius="sm">
      <NextLink href="/">
        <a>
          <Image src="/logo.webp" width="160px" alt="Logo" />
        </a>
      </NextLink>
    </Box>
  );
}
