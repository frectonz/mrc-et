// NextJs
import NextLink from "next/link";

// Chakra UI
import { Heading, Center } from "@chakra-ui/react";

// Components
import Seo from "../components/utils/Seo";
import PrimaryButton from "../components/utils/PrimaryButton";
import MainContainer from "../components/utils/MainContainer";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Not Found" />
      <MainContainer>
        <Heading mt={10} textAlign="center">
          Coming Soon.
        </Heading>
        <Center mb={10}>
          <NextLink href="/">
            <a>
              <PrimaryButton my={5}>Go to Home Page</PrimaryButton>
            </a>
          </NextLink>
        </Center>
      </MainContainer>
    </>
  );
}
