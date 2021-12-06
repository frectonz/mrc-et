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
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// Components
import MotionBox from "../../utils/MotionBox";
import MainContainer from "../../utils/MainContainer";

interface FooterProps {
  logoImage: string;
  licenseInfo: string;
  telephone: string;
  email: string;
  location: string;
  facebookLink: string;
  twitterLink: string;
  linkedInLink: string;
}

export default function Footer({
  logoImage,
  licenseInfo,
  telephone,
  email,
  location,
  facebookLink,
  twitterLink,
  linkedInLink,
}: FooterProps) {
  return (
    <Box bgColor="#223645" color="white" py={10}>
      <MainContainer>
        <Grid
          gap={5}
          templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
        >
          <Box>
            <Image src={logoImage} width="50%" alt="Logo" />
            <Text my={5} maxW="50ch">
              {licenseInfo}
            </Text>
          </Box>
          <Stack justify="center">
            <Box my={2}>
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

            <Box my={2}>
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
        </Grid>
        <Divider my={2} />
        <Text align="center">Copyright &copy; 2020 MRC-ET</Text>
      </MainContainer>
    </Box>
  );
}
