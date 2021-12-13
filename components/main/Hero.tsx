import React, { ReactNode } from "react";

// ChakraUI
import { Text, Stack, Heading } from "@chakra-ui/react";

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
    <Stack
      px={50}
      py={150}
      spacing={5}
      as="section"
      color={textColor}
      textAlign={alignment === "center" ? "center" : "left"}
      align={alignment === "center" ? "center" : "flex-start"}
      {...background}
    >
      <Heading as="h1" size="3xl" textShadow={textShadow}>
        {title}
      </Heading>
      <Text fontSize="xl" maxWidth="65ch" textShadow={textShadow}>
        {text}
      </Text>
      {children}
    </Stack>
  );
}
