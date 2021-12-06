// NextJs
import NextLink from "next/link";

// ChakraUI
import { Box, Flex, VStack, Divider, useBoolean } from "@chakra-ui/react";

// Interfaces
import { NavigationProps } from "./Navigation";
import { NavLink } from "../../../interfaces/NavLink";

// Components
import ArrowToTheRight from "../../utils/ArrowToTheRight";

export function ColumnNavigation({ links, ...rest }: NavigationProps) {
  return (
    <Box as="nav" {...rest}>
      <VStack as="ul" listStyleType="none" spacing={["2", "4"]}>
        {links.map((link, i) => (
          <ColumnLinkItem key={i} link={link} />
        ))}
      </VStack>
    </Box>
  );
}
function ColumnLinkItem({ link }: { link: NavLink }) {
  const [hover, setHover] = useBoolean(false);

  return (
    <>
      <Flex
        p={2}
        as="li"
        width="100%"
        justifyContent="space-between"
        onMouseEnter={setHover.on}
        onMouseLeave={setHover.off}
        _hover={{ color: "brand.secondary" }}
      >
        <NextLink href={link.href}>
          <a>{link.name}</a>
        </NextLink>
        <NextLink href={link.href}>
          <a>
            <ArrowToTheRight hover={hover} />
          </a>
        </NextLink>
      </Flex>
      <Divider />
    </>
  );
}
