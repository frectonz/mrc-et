import type { NextPage } from "next";

// CHakraUI
import { Flex, Spacer } from "@chakra-ui/react";

// Components
import Hero from "../components/main/Hero";
import Layout from "../components/layout/Layout";
import MainContainer from "../components/utils/MainContainer";
import SecondaryButton from "../components/utils/SecondaryButton";
import BlobCardList from "../components/main/BlobCards/BlobCardList";
import Testimonials from "../components/main/Testimonials/Testimonials";
import TwoColumnSection from "../components/main/TwoColumnSection/TwoColumnSection";

const heroProps = {
  title: "Lorem, ipsum dolor.",
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Aliquid obcaecati deleniti sapiente, placeat tempora quis ad 
         nostrum perspiciatis pariatur quasi!`,
  textColor: "white",
  image: "/hero/covid19.png",
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero {...heroProps}>
        <Flex>
          <SecondaryButton size="md">See Our Services</SecondaryButton>
          <Spacer width={10} />
          <SecondaryButton size="md">Book A Test</SecondaryButton>
        </Flex>
      </Hero>

      <MainContainer>
        <BlobCardList
          columns={2}
          listLabel="services"
          link={{
            text: "Go to services",
            href: "/services",
          }}
          cards={[
            {
              title: "Parental and Postnatal Diagnosis",
              link: "/services",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non optio quisquam dolore tenetur nostrum tempora animi ducimus nam magni.",
            },
            {
              title: "Hematologic Malignancies",
              link: "/services",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non optio quisquam dolore tenetur nostrum tempora animi ducimus nam magni.",
            },
            {
              title: "Tumor Characterization",
              link: "/services",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non optio quisquam dolore tenetur nostrum tempora animi ducimus nam magni.",
            },
            {
              title: "COVID19 Testing",
              link: "/services",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non optio quisquam dolore tenetur nostrum tempora animi ducimus nam magni.",
            },
          ]}
        />
      </MainContainer>

      <MainContainer>
        <TwoColumnSection
          title="Lorem ipsum dolor sit amet consectetur, adipisicing."
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos et laborum deleniti, eos tempora! Possimus, earum? Officia odit explicabo laudantium ea ratione sapiente mollitia libero soluta praesentium necessitatibus, architecto tenetur, beatae impedit eaque in voluptatibus iure eius dolorum dolores! Recusandae eius amet debitis qui ad voluptatem nihil explicabo modi!`}
          link="/services"
          linkText="Service"
          imageLink="/hero/covid19.png"
        />
      </MainContainer>

      <MainContainer>
        <Testimonials
          testimonials={[
            {
              personImage: "/hero/covid19.png",
              personTitle: "John Cat",
              personSubtitle: "CEO of CatsR's",
              testimonial:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, aut.",
            },
            {
              personImage: "/hero/covid19.png",
              personTitle: "John Cat",
              personSubtitle: "CEO of CatsR's",
              testimonial:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, aut.",
            },
            {
              personImage: "/hero/covid19.png",
              personTitle: "John Cat",
              personSubtitle: "CEO of CatsR's",
              testimonial:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, aut.",
            },
          ]}
        />
      </MainContainer>
    </Layout>
  );
};

export default Home;
