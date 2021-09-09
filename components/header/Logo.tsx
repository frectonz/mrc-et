// NextJs
import NextLink from "next/link";

// ChakraUI
import { Box, Image, useColorMode } from "@chakra-ui/react";

interface LogoProps {
  logoImage: string;
}

export default function Logo({ logoImage }: LogoProps) {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "none" : "white";

  return (
    <Box p={1} bg={bg} borderRadius="sm">
      <NextLink href="/">
        <a>
          <Image src={logoImage} width={100} alt="Logo" />
        </a>
      </NextLink>
    </Box>
  );
}
