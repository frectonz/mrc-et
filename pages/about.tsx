// NextJs
import { GetStaticProps } from "next";

// ChakraUI
import { Heading } from "@chakra-ui/react";

// Components
import Layout from "../components/layout/Layout";
import BlobCardsList from "../components/main/BlobCards/BlobCardList";
import MainContainer from "../components/utils/MainContainer";

// Interfaces
import { FooterData } from "../interfaces/FooterData";

interface AboutPageProps {
  footerData: FooterData;
}

export default function AboutPage({ footerData }: AboutPageProps) {
  return (
    <Layout footerData={footerData}>
      <MainContainer py={50}>
        <Heading textAlign="center" py={5}>
          MRC-ET Advanced Laboratory
        </Heading>
        <Heading
          size="sm"
          maxW="50ch"
          margin="auto"
          textAlign="center"
          fontWeight="hairline"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus magnam
          doloremque corporis velit quas vitae exercitationem nesciunt esse
          voluptatem doloribus, excepturi quia iure nostrum? Doloremque nostrum
          ipsa adipisci consequatur placeat.
        </Heading>
      </MainContainer>

      <MainContainer>
        <BlobCardsList
          showArrow={false}
          listLabel="aims and objectives"
          cards={[
            {
              title:
                "Introduce a simple and cost efficient genetic screening technique",
              link: "/services",
              text: "",
            },
            {
              title:
                "Promote and introduce MLPA® kits as diagnostic and research tools",
              link: "/services",
              text: "",
            },
            {
              title:
                "Explore, through research and development, prevalent hereditary diseases in the population",
              link: "/services",
              text: "",
            },
            {
              title:
                "Provide graduate and post graduate level advanced training in molecular diagnostics and recent advances in molecular biological techniques",
              link: "/services",
              text: "",
            },
            {
              title:
                "Prepare annual publication to disseminate the technology and the findings in collaboration with stakeholders",
              link: "/services",
              text: "",
            },
            {
              title:
                "Develop detection methods of prevalent hereditary diseases in the population",
              link: "/services",
              text: "",
            },
          ]}
        />
      </MainContainer>
    </Layout>
  );
}

// Library
import { readIndexPageData } from "../lib/indexPage";

export const getStaticProps: GetStaticProps<AboutPageProps> = () => {
  const indexPageData = readIndexPageData();

  return { props: { footerData: indexPageData } };
};
