// ChakraUI
import { Flex, Spacer, BoxProps } from "@chakra-ui/react";

// Components
import ColorModeToggle from "./ColorModeToggle";
import PrimaryButton from "../../utils/PrimaryButton";

interface ControlsProps extends BoxProps {
  actionButtonLabel: string;
}

export default function Controls({
  actionButtonLabel,
  ...rest
}: ControlsProps) {
  return (
    <Flex {...rest}>
      <ColorModeToggle />
      <Spacer width={5} />
      <PrimaryButton>{actionButtonLabel}</PrimaryButton>
    </Flex>
  );
}
