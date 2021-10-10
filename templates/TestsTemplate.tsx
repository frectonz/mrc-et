import { useState } from "react";

// Interfaces
import { TestData } from "../interfaces/Test";
import { TestsPageData } from "../lib/testsPage";
import { FooterData } from "../interfaces/FooterData";

// Components
import Seo from "../components/utils/Seo";
import Hero from "../components/main/Hero";
import Layout from "../components/layout/Layout";
import TestsList from "../components/tests/TestsList";
import MainContainer from "../components/utils/MainContainer";
import TestsSearchInput from "../components/utils/TestsSearchInput";

interface TestsTemplateProps {
  seoTitle: string;
  tests: TestData[];
  hero: TestsPageData;
  footerData: FooterData;
}

export default function TestsTemplate({
  hero,
  tests,
  seoTitle,
  footerData,
}: TestsTemplateProps) {
  const [testsList, setTestsList] = useState(tests);

  const handleChange = (searchStr: any) => {
    if (typeof searchStr === "string")
      setTestsList(
        tests.filter((test) => {
          const searchingWithCode = test.code
            .toLowerCase()
            .includes(searchStr.toLowerCase());
          const searchingWithName = test.name
            .toLowerCase()
            .includes(searchStr.toLowerCase());

          return searchStr === ""
            ? true
            : searchingWithName || searchingWithCode;
        })
      );
  };

  return (
    <>
      <Seo title={seoTitle} />
      <Layout footerData={footerData}>
        <Hero
          textColor="white"
          image={hero.headlineImage}
          title={hero.headlineTitle}
          text={hero.headlineDetail}
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
