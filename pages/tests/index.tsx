// NextJs
import { GetStaticProps } from "next";

// Interfaces
import { TestData } from "../../interfaces/Test";
import { TestsPageData } from "../../lib/testsPage";

// Templates
import TestsTemplate from "../../templates/TestsTemplate";

interface TestsPageProps {
  tests: TestData[];
  hero: TestsPageData;
}

export default function Tests({ hero, tests }: TestsPageProps) {
  return <TestsTemplate hero={hero} tests={tests} seoTitle="Tests" />;
}

// Library
import { getAllTests } from "../../lib/tests";
import { readTestsPageData } from "../../lib/testsPage";

export const getStaticProps: GetStaticProps<TestsPageProps> = () => {
  const tests = getAllTests();
  const testsPageData = readTestsPageData();

  return {
    props: { tests, hero: testsPageData },
  };
};
