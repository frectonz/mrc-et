// ChakraUI
import { Grid } from "@chakra-ui/react";

// Interface
import { Testimonial } from "../../../interfaces/Testimonial";

// Components
import TestimonialCard from "./Testimonial";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <Grid
      py={50}
      gap={5}
      templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
    >
      {testimonials.map((testimonial, i) => (
        <TestimonialCard key={i} testimonial={testimonial} />
      ))}
    </Grid>
  );
}
