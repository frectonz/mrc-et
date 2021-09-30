import { useEffect, useState } from "react";

// NextJs
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

// Components
import Seo from "../components/utils/Seo";
import Hero from "../components/main/Hero";
import Layout from "../components/layout/Layout";
import TestsList from "../components/tests/TestsList";
import MainContainer from "../components/utils/MainContainer";
import TestsSearchInput from "../components/utils/TestsSearchInput";

// Interfaces
import { TestData } from "../interfaces/Test";
import { TestsPageData } from "../lib/testsPage";
import { FooterData } from "../interfaces/FooterData";
import { ServiceData } from "../interfaces/ServiceData";

interface TestsPageProps {
  tests: TestData[];
  hero: TestsPageData;
  footerData: FooterData;
  services: ServiceData[];
}

export default function Tests({
  hero,
  tests,
  services,
  footerData,
}: TestsPageProps) {
  const { query } = useRouter();
  const [testsList, setTestsList] = useState(tests);

  useEffect(() => {
    const code = query?.code;
    if (typeof code === "string") {
      setTestsList(
        tests.filter((test) =>
          test.code.toLowerCase().includes(code.toLowerCase())
        )
      );
    }
  }, [tests, query, setTestsList]);

  const handleChange = (searchStr: any) => {
    if (typeof searchStr === "string") {
      setTestsList(
        tests.filter((test) => {
          return searchStr === ""
            ? true
            : test.name.toLowerCase().includes(searchStr.toLowerCase()) ||
                test.code.toLowerCase().includes(searchStr.toLowerCase());
        })
      );
    }
  };

  const service = services.find((service) => service.code === query?.code);

  return (
    <>
      <Seo title="Tests" />
      <Layout footerData={footerData}>
        <Hero
          textColor="white"
          image={hero.headlineImage}
          title={(service && service.title) || hero.headlineTitle}
          text={(service && service.description) || hero.headlineDetail}
        />
        <MainContainer my={30}>
          <TestsSearchInput tests={tests} onChange={handleChange} />
        </MainContainer>

        <MainContainer>
          <TestsList tests={testsList} />
        </MainContainer>
      </Layout>
    </>
  );
}

// Library
import { getAllTests } from "../lib/tests";
import { getAllServices } from "../lib/services";
import { readIndexPageData } from "../lib/indexPage";
import { readTestsPageData } from "../lib/testsPage";

export const getStaticProps: GetStaticProps<TestsPageProps> = () => {
  const tests = getAllTests();
  const services = getAllServices();
  const indexPageData = readIndexPageData();
  const testsPageData = readTestsPageData();

  return {
    props: { tests, footerData: indexPageData, hero: testsPageData, services },
  };
};
