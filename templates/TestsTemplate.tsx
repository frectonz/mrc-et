import { useState } from "react";

// Interfaces
import { HeroData } from "../interfaces/HeroData";
import { TestData } from "../interfaces/TestData";

// Components
import Seo from "../components/utils/Seo";
import Hero from "../components/main/Hero";
import TestsList from "../components/tests/TestsList";
import MainContainer from "../components/utils/MainContainer";
import TestsSearchInput from "../components/utils/TestsSearchInput";

interface TestsTemplateProps {
  seoTitle: string;
  tests: TestData[];
  hero: HeroData;
}

export default function TestsTemplate({
  hero,
  tests,
  seoTitle,
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
    </>
  );
}
