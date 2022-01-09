// NextJs
import NextLink from "next/link";

// ChakraUI
import { Flex, Grid, Stack, Badge } from "@chakra-ui/react";

// Components
import Card from "./Card";
import PrimaryButton from "../../utils/PrimaryButton";

// Interfaces
import { CardData } from "../../../interfaces/CardData";

interface ServicesProps {
  listLabel: string;
  link?: {
    text: string;
    href: string;
  };
  cards: CardData[];
  showArrow?: boolean;
  showBlob?: boolean;
  columns?: number;
}

export default function BlobCardsList({
  cards,
  listLabel,
  link,
  showArrow = true,
  showBlob = false,
  columns = 3,
}: ServicesProps) {
  return (
    <Stack spacing={10} py={50}>
      <Flex align="center" justify="space-between">
        <Badge>{listLabel}</Badge>

        {link && (
          <NextLink href={link.href}>
            <a>
              <PrimaryButton size="sm">{link.text}</PrimaryButton>
            </a>
          </NextLink>
        )}
      </Flex>

      <Grid
        gap={10}
        templateColumns={["repeat(1, 1fr)", null, `repeat(${columns}, 1fr)`]}
      >
        {cards.map((card, i) => {
          if (card.link === "") {
            return (
              <Card
                key={i}
                card={card}
                showBlob={showBlob}
                showArrow={showArrow}
              />
            );
          } else {
            return (
              <NextLink key={i} href={card.link}>
                <a>
                  <Card card={card} showArrow={showArrow} showBlob={showBlob} />
                </a>
              </NextLink>
            );
          }
        })}
      </Grid>
    </Stack>
  );
}
