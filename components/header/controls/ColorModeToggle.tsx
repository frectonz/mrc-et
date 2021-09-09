// ChakraUI
import { IconButton, useColorMode } from "@chakra-ui/react";

// Icons
import { FaMoon as Moon, FaSun as Sun } from "react-icons/fa";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isLight = colorMode === "light";
  const label = isLight ? "Activate Dark Mode" : "Activate Light Mode";
  const color = isLight ? "white" : "black";
  const background = isLight ? "black" : "white";
  const icon = isLight ? <Moon /> : <Sun />;

  return (
    <IconButton
      variant="ghost"
      icon={icon}
      title={label}
      aria-label={label}
      onClick={toggleColorMode}
      _hover={{
        color,
        background,
      }}
    />
  );
}
