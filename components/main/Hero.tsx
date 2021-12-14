import { ReactNode } from "react";

// ChakraUI
import { Text, Stack, Heading, Box } from "@chakra-ui/react";

// Components
import MainContainer from "../utils/MainContainer";

interface HeroProps {
  title: string;
  text: string;
  image: string;
  textColor: string;
  children?: ReactNode;
  alignment?: "left" | "center";
  gradientType?: "headline" | "carousel";
}

export default function Hero({
  text,
  title,
  image,
  children,
  textColor,
  alignment = "center",
  gradientType = "headline",
}: HeroProps) {
  const bgImage = image && `url(${image})`;
  const textShadow = "2px 2px rgba(0, 0, 0, .2)";
  const background = {
    bg: `${bgImage}
    ${
      gradientType === "carousel"
        ? "rgba(84, 185, 227, .3)"
        : "rgba(0, 0, 0, .5)"
    }`,
    bgSize: "cover",
    bgPos: "center",
    bgBlendMode: "color",
  };

  return (
    <Box h="70vh" color={textColor} {...background}>
      <MainContainer height="100%">
        <Stack
          width="100%"
          height="100%"
          spacing={7}
          justify="center"
          textAlign={alignment === "center" ? "center" : "left"}
          align={alignment === "center" ? "center" : "flex-start"}
        >
          <Heading as="h1" size="3xl" textShadow={textShadow}>
            {title}
          </Heading>
          <Text fontSize="xl" maxWidth="65ch" textShadow={textShadow}>
            {text}
          </Text>
          {children}
        </Stack>
      </MainContainer>
    </Box>
  );
}
