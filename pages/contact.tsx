// NextJS
import NextLink from "next/link";
import { GetStaticProps } from "next";

// ChakraUI
import {
  Box,
  Text,
  Grid,
  Stack,
  Input,
  HStack,
  Heading,
  Textarea,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
} from "@chakra-ui/react";

// Icons
import {
  FaUser,
  FaPhone,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

// Components
import Seo from "../components/utils/Seo";
import Map from "../components/utils/Map";
import Layout from "../components/layout/Layout";
import MotionBox from "../components/utils/MotionBox";
import MainContainer from "../components/utils/MainContainer";
import PrimaryButton from "../components/utils/PrimaryButton";

// Interfaces
import { FooterData } from "../interfaces/FooterData";

interface ContactPageProps {
  footerData: FooterData;
}

export default function Contact({ footerData }: ContactPageProps) {
  return (
    <>
      <Seo title="Contact Us" />
      <Layout footerData={footerData}>
        <MainContainer py={100}>
          <Heading textTransform="uppercase">Get In Touch</Heading>
          <Grid
            my={5}
            gap={10}
            templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
          >
            <Stack>
              <Location location={footerData.address} />
              <ContactUs phone={footerData.phone} email={footerData.email} />
              <FollowUs
                twitterLink={footerData.twitter}
                facebookLink={footerData.facebook}
                linkedInLink={footerData.linkedin}
              />
            </Stack>
            <ContactForm />
          </Grid>
          <Map />
        </MainContainer>
      </Layout>
    </>
  );
}

function ContactForm() {
  return (
    <Box>
      <Heading size="md" my={2}>
        Contact Form
      </Heading>
      <InputGroup my={5}>
        <InputLeftElement pointerEvents="none">
          <FaUser color="#3fa1ec" />
        </InputLeftElement>
        <Input type="text" placeholder="Name" />
      </InputGroup>
      <InputGroup my={5}>
        <InputLeftElement pointerEvents="none">
          <FaPhone color="#3fa1ec" style={{ transform: "rotate(90deg)" }} />
        </InputLeftElement>
        <Input type="tel" placeholder="Phone" />
      </InputGroup>
      <InputGroup my={5}>
        <InputLeftElement pointerEvents="none">
          <FaEnvelope color="#3fa1ec" />
        </InputLeftElement>
        <Input type="email" placeholder="Email" />
      </InputGroup>
      <InputGroup my={5}>
        <Input type="email" placeholder="Subject" />
      </InputGroup>

      <Textarea resize="none" placeholder="Your Message" />

      <PrimaryButton my={5} float="right">
        Submit
      </PrimaryButton>
    </Box>
  );
}

interface LocationProps {
  location: string;
}

function Location({ location }: LocationProps) {
  return (
    <Box my={5}>
      <Heading size="md" textTransform="uppercase" my={2}>
        Location
      </Heading>
      <Text>{location}</Text>
    </Box>
  );
}

interface ContactUsProps {
  phone: string;
  email: string;
}

function ContactUs({ phone, email }: ContactUsProps) {
  return (
    <Box my={5}>
      <Heading size="md" textTransform="uppercase" my={2}>
        Contact Us
      </Heading>
      <Text>
        Phone : <ChakraLink href={`tel:${phone}`}>{phone}</ChakraLink>
      </Text>
      <Text>
        Email : <ChakraLink href={`mailto:${email}`}>{email}</ChakraLink>
      </Text>
    </Box>
  );
}

interface FollowUsProps {
  facebookLink: string;
  twitterLink: string;
  linkedInLink: string;
}

function FollowUs({ facebookLink, twitterLink, linkedInLink }: FollowUsProps) {
  const socialMediaLinks = [
    {
      href: facebookLink,
      icon: FaFacebook,
    },
    {
      href: twitterLink,
      icon: FaTwitter,
    },
    {
      href: linkedInLink,
      icon: FaLinkedin,
    },
  ];

  return (
    <Box my={5}>
      <Heading size="md" textTransform="uppercase" my={2}>
        Follow Us
      </Heading>
      <HStack>
        {socialMediaLinks.map(({ icon: Icon, href }, i) => {
          return (
            <NextLink key={i} href={href}>
              <a>
                <MotionBox>
                  <Icon color="#3fa1ec" fontSize="1.4rem" />
                </MotionBox>
              </a>
            </NextLink>
          );
        })}
      </HStack>
    </Box>
  );
}

// Library
import { readIndexPageData } from "../lib/indexPage";

export const getStaticProps: GetStaticProps<ContactPageProps> = () => {
  const indexPageData = readIndexPageData();

  return { props: { footerData: indexPageData } };
};
