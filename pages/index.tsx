// NextJs
import Script from "next/script";
import NextLink from "next/link";
import { GetStaticProps } from "next";

// ChakraUI
import { Flex, Spacer } from "@chakra-ui/react";

// Components
import Hero from "../components/main/Hero";
import Layout from "../components/layout/Layout";
import MainContainer from "../components/utils/MainContainer";
import SecondaryButton from "../components/utils/SecondaryButton";
import BlobCardList from "../components/main/BlobCards/BlobCardList";
import Testimonials from "../components/main/Testimonials/Testimonials";
import TwoColumnSection from "../components/main/TwoColumnSection/TwoColumnSection";

import { IndexPageData } from "../lib/indexPage";

export interface HomePageProps {
  services: string[];
  indexPageData: IndexPageData;
}

export default function HomePage({ indexPageData, services }: HomePageProps) {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Layout>
        <Hero
          textColor="white"
          title={indexPageData.headlineTitle}
          text={indexPageData.headlineDetail}
          image={indexPageData.headlineImage}
        >
          <Flex>
            <NextLink href="/tests">
              <a>
                <SecondaryButton size="md">
                  {indexPageData.goToTestsLabel}
                </SecondaryButton>
              </a>
            </NextLink>

            <Spacer width={10} />

            <NextLink href="/contact">
              <a>
                <SecondaryButton size="md">
                  {indexPageData.goToContactPageLabel}
                </SecondaryButton>
              </a>
            </NextLink>
          </Flex>
        </Hero>

        <MainContainer>
          <BlobCardList
            columns={2}
            listLabel="services"
            link={{
              text: "Go to tests",
              href: "/tests",
            }}
            cards={services.map((service) => {
              return {
                title: service,
                link: "/services",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non optio quisquam dolore tenetur nostrum tempora animi ducimus nam magni.",
              };
            })}
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
    </>
  );
}

// Library
import { getAllServices } from "../lib/tests";
import { readIndexPageData } from "../lib/indexPage";

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const services = getAllServices();
  const indexPageData = readIndexPageData();

  return { props: { services, indexPageData } };
};
