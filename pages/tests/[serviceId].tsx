// NextJs
import { GetStaticProps, GetStaticPaths } from "next";

// Interfaces
import { TestData } from "../../interfaces/TestData";
import { HeroData } from "../../interfaces/HeroData";

// Templates
import TestsTemplate from "../../templates/TestsTemplate";

// Data
import test from "../../data/pages/tests.json";

interface ServiceTestsPageProps {
  tests: TestData[];
  hero: HeroData;
}

export default function TestsOfAServicePage({
  hero,
  tests,
}: ServiceTestsPageProps) {
  return (
    <TestsTemplate
      hero={hero}
      tests={tests}
      seoTitle={hero.headlineTitle}
      samplingTechniqueLabel={test.sampling_technique}
    />
  );
}

// Library
import { getAllTests } from "../../lib/tests";
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

export const getStaticProps: GetStaticProps<ServiceTestsPageProps> = async ({
  params,
}) => {
  const serviceData = readServiceFile(`${params?.serviceId}.yml`);
  const tests = getAllTests().filter((test) =>
    test.code.toLowerCase().includes(serviceData.code.toLowerCase())
  );

  return {
    props: {
      tests,
      hero: {
        headlineTitle: serviceData.title,
        headlineImage: serviceData.bgImage,
        headlineDetail: serviceData.description,
      },
    },
  };
};
