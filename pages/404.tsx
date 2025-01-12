// NextJs
import NextLink from "next/link";

// Chakra UI
import { Heading } from "@chakra-ui/react";

// Components
import Seo from "../components/utils/Seo";
import PrimaryButton from "../components/utils/PrimaryButton";
import MainContainer from "../components/utils/MainContainer";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Not Found" />
      <MainContainer mt={150} mb={120}>
        <Heading>The page you requested was not found.</Heading>
        <NextLink href="/">
          <a>
            <PrimaryButton my={5}>Go to Home Page</PrimaryButton>
          </a>
        </NextLink>
      </MainContainer>
    </>
  );
}
