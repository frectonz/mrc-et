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
    <Grid py={50} gap={5}>
      {testimonials.map((testimonial, i) => (
        <TestimonialCard key={i} testimonial={testimonial} />
      ))}
    </Grid>
  );
}
