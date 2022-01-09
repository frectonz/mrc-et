// NextJs
import { GetStaticProps } from "next";

// Interfaces
import { TestData } from "../../interfaces/TestData";

// Templates
import TestsTemplate from "../../templates/TestsTemplate";

// Data
import test from "../../data/pages/tests.json";

interface TestsPageProps {
  tests: TestData[];
}

export default function Tests({ tests }: TestsPageProps) {
  return (
    <TestsTemplate
      hero={{
        headlineTitle: test.headline_title,
        headlineDetail: test.headline_detail,
        headlineImage: test.headline_image,
      }}
      tests={tests}
      seoTitle="Tests"
      samplingTechniqueLabel={test.sampling_technique}
    />
  );
}

// Library
import { getAllTests } from "../../lib/tests";

export const getStaticProps: GetStaticProps<TestsPageProps> = () => {
  const tests = getAllTests();

  return {
    props: { tests },
  };
};
