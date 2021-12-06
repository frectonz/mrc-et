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
}

export default function Hero({
  text,
  title,
  image,
  children,
  textColor,
  alignment = "center",
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
      px={50}
      py={150}
      spacing={5}
      as="section"
      color={textColor}
      textAlign={alignment === "center" ? "center" : "left"}
      align={alignment === "center" ? "center" : "flex-start"}
      {...background}
    >
      <Heading as="h1" size="3xl" textShadow="3xl">
        {title}
      </Heading>
      <Text fontSize="xl" maxWidth="65ch">
        {text}
      </Text>
      {children}
    </Stack>
  );
}
