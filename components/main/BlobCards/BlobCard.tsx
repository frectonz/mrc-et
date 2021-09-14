// NextJs
import NextLink from "next/link";

// ChakraUI
import { Text, Stack, HStack, Heading, useBoolean } from "@chakra-ui/react";

// Components
import Blob from "./Blob";
import MotionBox from "../../utils/MotionBox";
import ArrowToTheRight from "../../utils/ArrowToTheRight";

// Interfaces
import { CardData } from "../../../interfaces/CardData";

interface CardProps {
  card: CardData;
  showArrow: boolean;
}

export default function BlobCard({ card, showArrow }: CardProps) {
  const [hover, setHover] = useBoolean(false);

  return (
    <NextLink href={card.link}>
      <a>
        <MotionBox
          cursor="pointer"
          onMouseEnter={setHover.on}
          onMouseLeave={setHover.off}
        >
          <Blob />
          <Stack p={5} spacing={5} borderRadius="md">
            <HStack justify="space-between">
              <Heading size="md">{card.title}</Heading>
              {showArrow && <ArrowToTheRight hover={hover} />}
            </HStack>
            <Text>{card.text}</Text>
          </Stack>
        </MotionBox>
      </a>
    </NextLink>
  );
}
