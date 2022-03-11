// NextJs
import NextLink from "next/link";

// ChakraUI
import {
  Box,
  Text,
  Grid,
  Flex,
  Image,
  Heading,
  BoxProps,
} from "@chakra-ui/react";

// Components
import MotionBox from "../../utils/MotionBox";
import PrimaryButton from "../../utils/PrimaryButton";

interface TwoColumnSectionProps extends BoxProps {
  text: string;
  link: string;
  title: string;
  subtitle: string;
  linkText: string;
  imageLink: string;
}

export default function TwoColumnSection({
  text,
  link,
  title,
  linkText,
  subtitle,
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
      <Flex flexDirection="column" align="flex-start" justify="space-evenly">
        <Box>
          <Heading size="lg">{title}</Heading>
          <Text fontSize="lg">{subtitle}</Text>
        </Box>
        <Text fontSize="lg">{text}</Text>
        <NextLink href={link}>
          <a>
            <PrimaryButton title={`Go to ${title} page`} mt={5}>
              {linkText}
            </PrimaryButton>
          </a>
        </NextLink>
      </Flex>
    </Grid>
  );
}
