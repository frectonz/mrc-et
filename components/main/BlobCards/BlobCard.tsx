// ChakraUI
import {
  Text,
  Stack,
  Image,
  HStack,
  Heading,
  useBoolean,
  useColorMode,
} from "@chakra-ui/react";

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
  const { colorMode } = useColorMode();
  const [hover, setHover] = useBoolean(false);

  const filter = colorMode === "light" ? "" : "invert(100%)";

  return (
    <MotionBox
      cursor={card.link === "" ? "default" : "pointer"}
      onMouseEnter={setHover.on}
      onMouseLeave={setHover.off}
    >
      <Blob />
      <Stack p={5} spacing={5} borderRadius="md">
        <HStack justify="space-between">
          {card.image && (
            <Image
              width="14"
              src={card.image}
              alt={card.title}
              filter={filter}
            />
          )}
          <Heading size="md">{card.title}</Heading>
          {showArrow && <ArrowToTheRight hover={hover} />}
        </HStack>
        <Text>{card.text}</Text>
      </Stack>
    </MotionBox>
  );
}
