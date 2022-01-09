// ChakraUI
import {
  Button,
  useBoolean,
  ButtonProps,
  useColorMode,
} from "@chakra-ui/react";

// Components
import SkewBox from "./SkewBox";
import ArrowToTheRight from "./ArrowToTheRight";

interface PrimaryButton extends ButtonProps {
  hasArrow?: boolean;
}

export default function PrimaryButton({
  children,
  hasArrow = true,
  ...rest
}: PrimaryButton) {
  const { colorMode } = useColorMode();

  const [hover, setHover] = useBoolean(false);

  const bg = colorMode === "light" ? "whitesmoke" : "gray.800";
  const color = colorMode === "light" ? "gray.800" : "white";

  return (
    <Button
      {...rest}
      bg={bg}
      color={color}
      textTransform="uppercase"
      onMouseEnter={setHover.on}
      onMouseLeave={setHover.off}
      _hover={{
        bg,
      }}
      rightIcon={hasArrow ? <ArrowToTheRight hover={hover} /> : undefined}
    >
      <SkewBox>{children}</SkewBox>
    </Button>
  );
}
