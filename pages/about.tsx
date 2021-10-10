// NextJs
import { GetStaticProps } from "next";

// ChakraUI
import { Heading } from "@chakra-ui/react";

// Components
import Seo from "../components/utils/Seo";
import MainContainer from "../components/utils/MainContainer";
import BlobCardsList from "../components/main/BlobCards/BlobCardList";

// Interfaces
import { AboutPageData } from "../lib/aboutPage";

// MDX
import { MDXRemote } from "next-mdx-remote";

// MDX Components
import { components } from "../components/utils/components";

interface AboutPageProps {
  aboutPageData: AboutPageData;
}

export default function AboutPage({ aboutPageData }: AboutPageProps) {
  return (
    <>
      <Seo title="About" />
      <MainContainer py={50}>
        <Heading textAlign="center" py={5}>
          {aboutPageData.headlineTitle}
        </Heading>
        <Heading
          size="sm"
          maxW="50ch"
          margin="auto"
          textAlign="center"
          fontWeight="hairline"
        >
          {aboutPageData.headlineDetail}
        </Heading>
      </MainContainer>

      <MainContainer>
        <BlobCardsList
          showArrow={false}
          listLabel="aims and objectives"
          cards={aboutPageData.aims.map((aim) => {
            return {
              title: aim,
              link: "",
              text: "",
            };
          })}
        />
      </MainContainer>

      <MainContainer pb={50}>
        <MDXRemote {...aboutPageData.content} components={components} />
      </MainContainer>
    </>
  );
}

// Library
import { readAboutPageData } from "../lib/aboutPage";

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const aboutPageData = await readAboutPageData();

  return { props: { aboutPageData } };
};
