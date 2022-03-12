// ChakraUI
import {
  Box,
  Text,
  Flex,
  Heading,
  Avatar,
  useColorMode,
} from "@chakra-ui/react";

// Icons
import { FaQuoteLeft } from "react-icons/fa";

// Components
import MotionBox from "../../utils/MotionBox";

// Interface
import { TestimonialData } from "../../../interfaces/TestimonialData";

interface TestimonialProps {
  testimonial: TestimonialData;
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  const { colorMode } = useColorMode();
  return (
    <MotionBox p={5}>
      <FaQuoteLeft
        fontSize="5rem"
        style={{
          position: "absolute",
          color:
            colorMode === "light"
              ? "rgba(0, 0, 0, .1)"
              : "rgba(255, 255, 255, .1)",
        }}
      />
      <Text my={5} fontWeight="extrabold">
        {testimonial.testimonial}
      </Text>
      <Flex align="center">
        <Avatar
          src={testimonial.personImage}
          name={testimonial.personTitle}
          title={`${testimonial.personTitle} image`}
        />
        <Box ml={5}>
          <Heading size="sm">{testimonial.personTitle}</Heading>
          <Text>{testimonial.personSubtitle}</Text>
        </Box>
      </Flex>
    </MotionBox>
  );
}
