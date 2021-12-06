// NextJs
import NextLink from "next/link";

// Chakra UI
import { Box, HStack, BoxProps } from "@chakra-ui/react";

// Interfaces
import { NavLink } from "../../../interfaces/NavLink";

export interface NavigationProps extends BoxProps {
  links: NavLink[];
}

export function Navigation({ links, ...rest }: NavigationProps) {
  return (
    <Box as="nav" {...rest}>
      <HStack as="ul" listStyleType="none" spacing={["2", "4"]}>
        {links.map((link, i) => (
          <LinkItem key={i} link={link} />
        ))}
      </HStack>
    </Box>
  );
}

function LinkItem({ link }: { link: NavLink }) {
  return (
    <Box
      p={2}
      as="li"
      cursor="pointer"
      fontSize={[`md`, null, null, `lg`]}
      _hover={{ color: "brand.secondary" }}
    >
      <NextLink href={link.href}>
        <a>{link.name}</a>
      </NextLink>
    </Box>
  );
}
