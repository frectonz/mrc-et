// NextJs
import { GetStaticProps } from "next";

// ChakraUI
import { Heading } from "@chakra-ui/react";

// Components
import Seo from "../components/utils/Seo";
import Layout from "../components/layout/Layout";
import BlobCardsList from "../components/main/BlobCards/BlobCardList";
import MainContainer from "../components/utils/MainContainer";

// Interfaces
import { AboutPageData } from "../lib/aboutPage";
import { FooterData } from "../interfaces/FooterData";

// MDX
import { MDXRemote } from "next-mdx-remote";

// MDX Components
import { components } from "../components/utils/components";

interface AboutPageProps {
  footerData: FooterData;
  aboutPageData: AboutPageData;
}

export default function AboutPage({
  footerData,
  aboutPageData,
}: AboutPageProps) {
  return (
    <>
      <Seo title="About" />
      <Layout footerData={footerData}>
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
      </Layout>
    </>
  );
}

// Library
import { readIndexPageData } from "../lib/indexPage";
import { readAboutPageData } from "../lib/aboutPage";

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const indexPageData = readIndexPageData();
  const aboutPageData = await readAboutPageData();

  return { props: { footerData: indexPageData, aboutPageData } };
};
