import Head from "next/head";
import { GetStaticProps } from "next";

import { HomePageTemplate, HomePageProps } from "../template/HomePage";

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
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
