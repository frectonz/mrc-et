// NextJs
import Script from "next/script";
import NextLink from "next/link";
import { GetStaticProps } from "next";

// ChakraUI
import { Flex, Spacer, Badge } from "@chakra-ui/react";

// Components
import Seo from "../components/utils/Seo";
import Hero from "../components/main/Hero";
import Carousel from "../components/carousel/Carousel";
import CardList from "../components/main/Cards/CardList";
import MainContainer from "../components/utils/MainContainer";
import PrimaryButton from "../components/utils/PrimaryButton";
import SecondaryButton from "../components/utils/SecondaryButton";
import Testimonials from "../components/main/Testimonials/Testimonials";
import TwoColumnSection from "../components/main/TwoColumnSection/TwoColumnSection";

import { IndexPageData } from "../lib/indexPage";
import { BlogData } from "../interfaces/BlogData";
import { ServiceData } from "../interfaces/ServiceData";
import { Testimonial } from "../interfaces/Testimonial";

export interface HomePageProps {
  services: ServiceData[];
  testimonials: Testimonial[];
  indexPageData: IndexPageData;
  latestBlog: BlogData;
}

export default function HomePage({
  indexPageData,
  services,
  testimonials,
  latestBlog,
}: HomePageProps) {
  const hero = (
    <Hero
      alignment="left"
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
  );

  return (
    <>
      <Seo />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Carousel slides={[hero]} />

      <MainContainer>
        <CardList
          columns={3}
          listLabel="services"
          link={{
            text: "Go to tests",
            href: "/tests",
          }}
          cards={services.map((service) => {
            return {
              title: service.title,
              image: service.image,
              text: service.description,
              link: `/tests/${service.title}`,
            };
          })}
        />
      </MainContainer>

      <MainContainer>
        <Flex align="center" justify="space-between">
          <Badge>Latest Blog</Badge>

          <NextLink href="/blogs">
            <a>
              <PrimaryButton size="sm">Read our blogs</PrimaryButton>
            </a>
          </NextLink>
        </Flex>
        <TwoColumnSection
          title={latestBlog.title}
          text={latestBlog.detail}
          link={`/blogs/${latestBlog.id}`}
          linkText="Read More"
          imageLink={latestBlog.image}
        />
      </MainContainer>

      <MainContainer>
        <Testimonials testimonials={testimonials} />
      </MainContainer>
    </>
  );
}

// Library
import { getAllBlogs } from "../lib/blogs";
import { getAllServices } from "../lib/services";
import { readIndexPageData } from "../lib/indexPage";
import { getAllTestimonials } from "../lib/testimonials";

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const blogs = getAllBlogs();
  const services = getAllServices();
  const testimonials = getAllTestimonials();
  const indexPageData = readIndexPageData();

  return {
    props: { services, indexPageData, testimonials, latestBlog: blogs[0] },
  };
};
