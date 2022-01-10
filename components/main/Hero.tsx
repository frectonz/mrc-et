import { ReactNode } from "react";

// ChakraUI
import { Text, Stack, Heading, Box, BoxProps } from "@chakra-ui/react";

// Components
import MainContainer from "../utils/MainContainer";

interface HeroProps extends BoxProps {
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
  ...rest
}: HeroProps) {
  const bgImage = image && `url(${image})`;
  const textShadow = "2px 2px rgba(0, 0, 0, .3)";
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
    <Box
      {...rest}
      h={["90vh", null, null, "70vh"]}
      color={textColor}
      {...background}
    >
      <MainContainer height="100%">
        <Stack
          spacing={7}
          width="100%"
          height="100%"
          justify="center"
          textAlign={alignment === "center" ? "center" : "left"}
          align={alignment === "center" ? "center" : "flex-start"}
        >
          <Heading
            as="h1"
            textShadow={textShadow}
            fontSize={["1.7rem", "2rem", "", "2.5rem"]}
          >
            {title}
          </Heading>
          <Text
            maxWidth="65ch"
            textShadow={textShadow}
            fontSize={["1.2rem", "1.4rem", "", "1.5rem"]}
          >
            {text}
          </Text>
          {children}
        </Stack>
      </MainContainer>
    </Box>
  );
}
