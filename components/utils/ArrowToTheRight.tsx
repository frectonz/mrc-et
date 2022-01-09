// Icons
import { FaArrowRight } from "react-icons/fa";

interface ArrowToTheRightProps {
  hover: boolean;
}

export default function ArrowToTheRight({ hover }: ArrowToTheRightProps) {
  return (
    <FaArrowRight
      fontSize="0.8rem"
      style={{
        transition: "500ms",
        transform: hover ? "translateX(10px)" : "",
      }}
    />
  );
}
