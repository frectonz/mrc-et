// NextJs
import NextLink from "next/link";

// ChakraUI
import {
  Box,
  Flex,
  Image,
  VStack,
  Divider,
  useBoolean,
} from "@chakra-ui/react";

// Interfaces
import { NavigationProps } from "./Navigation";
import { NavLink } from "../../../../interfaces/NavLink";

// Components
import ArrowToTheRight from "../../../utils/ArrowToTheRight";

interface ColumnNavigationProps extends NavigationProps {
  closeDrawer: () => void;
}

export function ColumnNavigation({
  links,
  closeDrawer,
  ...rest
}: ColumnNavigationProps) {
  return (
    <Box as="nav" {...rest}>
      <VStack as="ul" listStyleType="none" spacing={["2", "4"]}>
        {links.map((link, i) => (
          <ColumnLinkItem key={i} link={link} closeDrawer={closeDrawer} />
        ))}
      </VStack>
    </Box>
  );
}
function ColumnLinkItem({
  link,
  closeDrawer,
}: {
  link: NavLink;
  closeDrawer: () => void;
}) {
  const [hover, setHover] = useBoolean(false);

  return (
    <>
      <Flex
        p={2}
        as="li"
        width="100%"
        fontSize="xl"
        justifyContent="space-between"
        onMouseEnter={setHover.on}
        onMouseLeave={setHover.off}
        _hover={{ color: "brand.secondary" }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{
            gap: "5px",
          }}
        >
          <Image width="20px" alt="" src={link.icon} />
          <NextLink href={link.href}>
            <a onClick={closeDrawer}>{link.name}</a>
          </NextLink>
        </Box>
        <NextLink href={link.href}>
          <a onClick={closeDrawer}>
            <ArrowToTheRight hover={hover} />
          </a>
        </NextLink>
      </Flex>
      <Divider />
    </>
  );
}
