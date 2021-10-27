// NextJs
import { GetStaticProps } from "next";

// ChakraUI
import { Heading } from "@chakra-ui/react";

// Interfaces
import { AboutPageData } from "../lib/aboutPage";

// Components
import Seo from "../components/utils/Seo";
import CardsList from "../components/main/Cards/CardList";
import MarkdownDisplay from "../components/MarkdownDisplay";
import MainContainer from "../components/utils/MainContainer";

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
        <CardsList
          showBlob={true}
          showArrow={false}
          listLabel="aims and objectives"
          cards={aboutPageData.aims.map((aim) => {
            return {
              title: aim,
              link: "",
              text: "",
              image: "",
            };
          })}
        />
      </MainContainer>

      <MainContainer pb={50}>
        <MarkdownDisplay content={aboutPageData.content} />
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
