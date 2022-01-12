// NextJs
import NextLink from "next/link";

// ChakraUI
import { VStack, Grid, Heading, Text, Image, BoxProps } from "@chakra-ui/react";

// Components
import MotionBox from "../../utils/MotionBox";
import PrimaryButton from "../../utils/PrimaryButton";

interface TwoColumnSectionProps extends BoxProps {
  text: string;
  link: string;
  title: string;
  linkText: string;
  imageLink: string;
}

export default function TwoColumnSection({
  title,
  text,
  link,
  linkText,
  imageLink,
  ...rest
}: TwoColumnSectionProps) {
  return (
    <Grid
      {...rest}
      py={50}
      gap={10}
      templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
    >
      <MotionBox my="auto" boxShadow="2xl" borderRadius="2xl">
        <Image borderRadius="2xl" src={imageLink} alt={title} />
      </MotionBox>
      <VStack align="flex-start" justify="space-between">
        <Heading size="lg">{title}</Heading>
        <Text my={2} fontSize="lg">
          {text}
        </Text>
        <NextLink href={link}>
          <a>
            <PrimaryButton title={`Go to ${title} page`}>
              {linkText}
            </PrimaryButton>
          </a>
        </NextLink>
      </VStack>
    </Grid>
  );
}
