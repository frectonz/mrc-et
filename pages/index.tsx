import Script from "next/script";
import { GetStaticProps } from "next";

import { HomePageTemplate, HomePageProps } from "../templates/HomePage";

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <HomePageTemplate {...props} />;
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
