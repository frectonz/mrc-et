// ChakraUI
import {
  Box,
  Text,
  Link,
  Image,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const p = ({ children }: { children: any }) => <Text py={2}>{children}</Text>;
const h1 = ({ children }: { children: any }) => (
  <Heading size="xl" py={2}>
    {children}
  </Heading>
);
const h2 = ({ children }: { children: any }) => (
  <Heading size="lg" py={2}>
    {children}
  </Heading>
);
const h3 = ({ children }: { children: any }) => (
  <Heading size="md" py={2}>
    {children}
  </Heading>
);
const h4 = ({ children }: { children: any }) => (
  <Heading size="sm" py={2}>
    {children}
  </Heading>
);
const h5 = ({ children }: { children: any }) => (
  <Heading size="xs" py={2}>
    {children}
  </Heading>
);
const img = ({ src, alt, title }: { src: any; alt: any; title: any }) => (
  <>
    <Image py={2} src={src} alt={alt} />
    <Text pb={2}>{title}</Text>
  </>
);
const a = ({ children, ...props }: { children: any }) => (
  <Link {...props} color="#3fa1ec">
    {children}
  </Link>
);
const ul = ({ children }: { children: any }) => (
  <UnorderedList py={2}>{children}</UnorderedList>
);
const ol = ({ children }: { children: any }) => (
  <OrderedList py={2}>{children}</OrderedList>
);
const li = ({ children }: { children: any }) => <ListItem>{children}</ListItem>;
const hr = () => <Divider py={2} />;
const blockquote = ({ children }: { children: any }) => (
  <Box as="div" borderLeft="2px solid black" p={2}>
    {children}
  </Box>
);

export const components = {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6: h5,
  img,
  a,
  ul,
  ol,
  li,
  hr,
  blockquote,
};
