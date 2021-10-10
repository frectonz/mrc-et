// NextJs
import { GetStaticProps, GetStaticPaths } from "next";

// Interfaces
import { TestData } from "../../interfaces/Test";
import { TestsPageData } from "../../lib/testsPage";
import { FooterData } from "../../interfaces/FooterData";
import { ServiceData } from "../../interfaces/ServiceData";

// Templates
import TestsTemplate from "../../templates/TestsTemplate";

interface TestsOfAServicePageProps {
  tests: TestData[];
  hero: TestsPageData;
  footerData: FooterData;
}

export default function TestsOfAServicePage({
  hero,
  tests,
  footerData,
}: TestsOfAServicePageProps) {
  return (
    <TestsTemplate
      hero={hero}
      tests={tests}
      footerData={footerData}
      seoTitle={hero.headlineTitle}
    />
  );
}

// Library
import { getAllTests } from "../../lib/tests";
import { readTestsPageData } from "../../lib/testsPage";
import { readIndexPageData } from "../../lib/indexPage";
import { getAllServices, readServiceFile } from "../../lib/services";

export const getStaticPaths: GetStaticPaths = async () => {
  const services = getAllServices();

  return {
    paths: services.map((service) => {
      return {
        params: {
          serviceId: service.title,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TestsOfAServicePageProps> = async ({
  params,
}) => {
  let tests = getAllTests();
  const testsPageData = readTestsPageData();
  const indexPageData = readIndexPageData();
  let serviceData: ServiceData = {
    code: "",
    description: "",
    title: params?.serviceId as string,
  };
  try {
    serviceData = readServiceFile(`${params?.serviceId}.yml`);
  } catch {}

  tests = tests.filter((test) =>
    test.code.toLowerCase().includes(serviceData.code.toLowerCase())
  );

  return {
    props: {
      tests,
      footerData: indexPageData,
      hero: {
        headlineTitle: serviceData.title || testsPageData.headlineTitle,
        headlineImage: testsPageData.headlineImage,
        headlineDetail: serviceData.description || testsPageData.headlineDetail,
      },
    },
  };
};
