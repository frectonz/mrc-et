// NextJs
import Script from "next/script";
import NextLink from "next/link";
import type { GetStaticProps } from "next";

// ChakraUI
import { Flex, Badge } from "@chakra-ui/react";

// Components
import Seo from "../components/utils/Seo";
import CardList from "../components/main/Cards/CardList";
import HeroesCarousel from "../templates/HeroesCarousel";
import MainContainer from "../components/utils/MainContainer";
import PrimaryButton from "../components/utils/PrimaryButton";
import Testimonials from "../components/main/Testimonials/Testimonials";
import TwoColumnSection from "../components/main/TwoColumnSection/TwoColumnSection";

import { BlogData } from "../interfaces/BlogData";
import { ServiceData } from "../interfaces/ServiceData";
import { Testimonial } from "../interfaces/Testimonial";

// data
import index from "../data/pages/index.json";

export interface HomePageProps {
  latestBlog: BlogData;
  services: ServiceData[];
  testimonials: Testimonial[];
}

export default function HomePage({
  services,
  latestBlog,
  testimonials,
}: HomePageProps) {
  return (
    <>
      <Seo />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <HeroesCarousel
        headlines={index.headlines}
        testsPageLabel={index.tests_page_label}
        contactPageLabel={index.contact_page_label}
      />

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
import { getAllTestimonials } from "../lib/testimonials";

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const blogs = getAllBlogs();
  const services = getAllServices();
  const testimonials = getAllTestimonials();

  return {
    props: { services, testimonials, latestBlog: blogs[0] },
  };
};
