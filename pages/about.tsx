// Components
import { Heading } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import BlobCardsList from "../components/main/BlobCards/BlobCardList";
import MainContainer from "../components/utils/MainContainer";

export default function about() {
  return (
    <Layout>
      <MainContainer py={50}>
        <Heading textAlign="center" py={5}>
          MRC-ET Advanced Laboratory
        </Heading>
        <Heading
          textAlign="center"
          size="sm"
          fontWeight="hairline"
          width="50ch"
          margin="auto"
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
