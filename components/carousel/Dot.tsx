import { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";

interface DotProps {
  selected: boolean;
  onClick: () => void;
}

const Dot: FunctionComponent<DotProps> = ({ selected, onClick }) => {
  const bg = selected ? "blackAlpha.800" : "blackAlpha.500";

  return (
    <Box
      bg={bg}
      m="0 2px"
      rounded="50%"
      cursor="pointer"
      display="inline-block"
      boxSize={["7px", null, "15px"]}
      _hover={{ bg: "blackAlpha.800" }}
      transition="background-color 0.6s ease"
      onClick={() => onClick()}
    />
  );
};

export default Dot;
