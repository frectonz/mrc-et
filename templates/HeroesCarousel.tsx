import type { FunctionComponent } from "react";

// NextJs
import NextLink from "next/link";

// ChakraUI
import { Flex, Spacer } from "@chakra-ui/react";

// Interfaces
import type { Headline } from "../interfaces/Headline";

// Components
import Hero from "../components/main/Hero";
import Carousel from "../components/carousel/Carousel";
import SecondaryButton from "../components/utils/SecondaryButton";

interface HeroesCarouselProps {
  headlines: Headline[];
  testsPageLabel: string;
  contactPageLabel: string;
}

const HeroesCarousel: FunctionComponent<HeroesCarouselProps> = ({
  headlines,
  testsPageLabel,
  contactPageLabel,
}) => {
  return (
    <Carousel
      slides={headlines.map(({ title, image, detail }, i) => (
        <Hero
          title={title}
          text={detail}
          image={image}
          alignment="left"
          textColor="white"
          key={`hero-${i}`}
        >
          <Flex>
            <NextLink href="/tests">
              <a>
                <SecondaryButton size="md">{testsPageLabel}</SecondaryButton>
              </a>
            </NextLink>

            <Spacer width={10} />

            <NextLink href="/contact">
              <a>
                <SecondaryButton size="md">{contactPageLabel}</SecondaryButton>
              </a>
            </NextLink>
          </Flex>
        </Hero>
      ))}
    />
  );
};

export default HeroesCarousel;
