import { useState } from "react";

export const useSlider = (slidesCount: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };

  return { prevSlide, nextSlide, setSlide, currentSlide };
};
