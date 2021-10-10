// NextJs
import { GetStaticProps } from "next";

// Interfaces
import { TestData } from "../../interfaces/Test";
import { TestsPageData } from "../../lib/testsPage";
import { FooterData } from "../../interfaces/FooterData";

// Templates
import TestsTemplate from "../../templates/TestsTemplate";

interface TestsPageProps {
  tests: TestData[];
  hero: TestsPageData;
  footerData: FooterData;
}

export default function Tests({ hero, tests, footerData }: TestsPageProps) {
  return (
    <TestsTemplate
      hero={hero}
      tests={tests}
      seoTitle="Tests"
      footerData={footerData}
    />
  );
}

// Library
import { getAllTests } from "../../lib/tests";
import { readIndexPageData } from "../../lib/indexPage";
import { readTestsPageData } from "../../lib/testsPage";

export const getStaticProps: GetStaticProps<TestsPageProps> = () => {
  const tests = getAllTests();
  const indexPageData = readIndexPageData();
  const testsPageData = readTestsPageData();

  return {
    props: { tests, footerData: indexPageData, hero: testsPageData },
  };
};
