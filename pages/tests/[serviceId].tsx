// NextJs
import { GetStaticProps, GetStaticPaths } from "next";

// Interfaces
import { TestData } from "../../interfaces/TestData";
import { TestsPageData } from "../../lib/testsPage";
import { ServiceData } from "../../interfaces/ServiceData";

// Templates
import TestsTemplate from "../../templates/TestsTemplate";

interface TestsOfAServicePageProps {
  tests: TestData[];
  hero: TestsPageData;
}

export default function TestsOfAServicePage({
  hero,
  tests,
}: TestsOfAServicePageProps) {
  return (
    <TestsTemplate hero={hero} tests={tests} seoTitle={hero.headlineTitle} />
  );
}

// Library
import { getAllTests } from "../../lib/tests";
import { readTestsPageData } from "../../lib/testsPage";
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

  let serviceData: ServiceData = {
    code: "",
    image: "",
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
      hero: {
        headlineTitle: serviceData.title || testsPageData.headlineTitle,
        headlineImage: testsPageData.headlineImage,
        headlineDetail: serviceData.description || testsPageData.headlineDetail,
      },
    },
  };
};
