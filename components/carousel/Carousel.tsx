import { FunctionComponent, ReactNode } from "react";

import Dot from "./Dot";
import { useSlider } from "../../hooks/useSlider";

import { Box, Text, Flex, HStack, ChakraProps } from "@chakra-ui/react";

const arrowStyles: ChakraProps = {
  p: "16px",
  w: "auto",
  top: "50%",
  mt: "-22px",
  color: "white",
  pos: "absolute",
  fontSize: "18px",
  cursor: "pointer",
  userSelect: "none",
  fontWeight: "bold",
  transition: "0.6s ease",
  borderRadius: "0 3px 3px 0",
  _hover: {
    opacity: 0.8,
    bg: "black",
  },
};

interface CarouselProps {
  slides: ReactNode[];
}

const Carousel: FunctionComponent<CarouselProps> = ({ slides }) => {
  const slidesCount = slides.length;
  const { currentSlide, nextSlide, prevSlide, setSlide } =
    useSlider(slidesCount);

  const slideComponents = (
    <Flex w="full" transition="all .5s" ml={`-${currentSlide * 100}%`}>
      {slides.map((slide, sid) => (
        <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
          {slide}
        </Box>
      ))}
    </Flex>
  );

  const leftClick = (
    <Text {...arrowStyles} left="0" onClick={prevSlide}>
      &#10094;
    </Text>
  );

  const rightClick = (
    <Text {...arrowStyles} right="0" onClick={nextSlide}>
      &#10095;
    </Text>
  );

  const dots = (
    <HStack justify="center" pos="absolute" bottom="8px" w="full">
      {slides.map((_, slide) => (
        <Dot
          key={`dots-${slide}`}
          selected={currentSlide === slide}
          onClick={() => setSlide(slide)}
        />
      ))}
    </HStack>
  );

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Flex w="full" overflow="hidden" pos="relative">
        {slideComponents}
        {leftClick}
        {rightClick}
        {dots}
      </Flex>
    </Flex>
  );
};

export default Carousel;
