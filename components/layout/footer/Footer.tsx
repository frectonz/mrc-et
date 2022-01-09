// ChakraUI
import {
  Box,
  Text,
  Grid,
  Image,
  Stack,
  HStack,
  Divider,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";

// Icons
import { FaFacebook, FaLinkedinIn, FaTwitter, FaLink } from "react-icons/fa";

// Components
import MotionBox from "../../utils/MotionBox";
import MainContainer from "../../utils/MainContainer";

// Interfaces
import { LinkData } from "../../../interfaces/LinkData";

interface FooterProps {
  email: string;
  location: string;
  telephone: string;
  logoImage: string;
  licenseInfo: string;
  twitterLink: string;
  facebookLink: string;
  linkedInLink: string;
  recommendedLinks: LinkData[];
}

export default function Footer({
  email,
  location,
  telephone,
  logoImage,
  licenseInfo,
  twitterLink,
  facebookLink,
  linkedInLink,
  recommendedLinks,
}: FooterProps) {
  return (
    <Box bgColor="#223645" color="white" py={10}>
      <MainContainer>
        <Grid
          gap={5}
          templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
        >
          <Box>
            <Image src={logoImage} width="50%" alt="Logo" />
            <Text my={5} maxW="50ch">
              {licenseInfo}
            </Text>
          </Box>

          <Stack justify="flex-start">
            <Box>
              <Heading mb={2} size="md" textTransform="uppercase">
                Address
              </Heading>
              <Text fontSize="1.01rem">
                Tel:{" "}
                <ChakraLink href={`tel:+${telephone}`}>+{telephone}</ChakraLink>
              </Text>
              <Text fontSize="1.01rem">
                Email: <ChakraLink href={`mailto:${email}`}>{email}</ChakraLink>
              </Text>
              <Text fontSize="1.01rem">{location}</Text>
            </Box>

            <Box
              style={{
                marginTop: 25,
              }}
            >
              <Heading mb={2} size="md" textTransform="uppercase">
                Social Media
              </Heading>
              <HStack>
                <MotionBox cursor="pointer">
                  <a title="Facebook" href={facebookLink}>
                    <FaFacebook fontSize="1.3rem" />
                  </a>
                </MotionBox>
                <MotionBox cursor="pointer">
                  <a title="Twitter" href={twitterLink}>
                    <FaTwitter fontSize="1.3rem" />
                  </a>
                </MotionBox>
                <MotionBox cursor="pointer">
                  <a title="LinkedIn" href={linkedInLink}>
                    <FaLinkedinIn fontSize="1.3rem" />
                  </a>
                </MotionBox>
              </HStack>
            </Box>
          </Stack>

          <Stack justify="flex-start">
            <Heading mb={2} size="md" textTransform="uppercase">
              Recommended Links
            </Heading>
            <Stack>
              {recommendedLinks.map((l, i) => (
                <ChakraLink key={i} href={l.url}>
                  <FaLink
                    style={{
                      display: "inline",
                      marginRight: "10px",
                    }}
                  />
                  <span>{l.text}</span>
                </ChakraLink>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Divider my={2} />
        <Text align="center">Copyright &copy; 2021 MRC-ET</Text>
      </MainContainer>
    </Box>
  );
}
