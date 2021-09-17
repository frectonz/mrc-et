import React, { ReactNode } from "react";

// ChakraUI
import { Text, Stack, Heading } from "@chakra-ui/react";

interface HeroProps {
  title: string;
  text: string;
  image: string;
  textColor: string;
  children?: ReactNode;
}

export default function Hero({
  title,
  text,
  textColor,
  image,
  children,
}: HeroProps) {
  const background = {
    bgPos: "center",
    bgSize: "cover",
    bgImage: image,
    bgBlendMode: "color",
    bgColor: "rgba(0,0,0,0.3)",
  };

  return (
    <Stack
      py={150}
      spacing={5}
      as="section"
      align="center"
      color={textColor}
      {...background}
    >
      <Heading as="h1" textShadow="2xl" textAlign="center">
        {title}
      </Heading>
      <Text maxWidth="45ch" align="center" textAlign="center">
        {text}
      </Text>
      {children}
    </Stack>
  );
}
