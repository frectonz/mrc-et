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
  hero: HeroData;
  seoTitle: string;
  tests: TestData[];
}

export default function TestsTemplate({
  hero,
  tests,
  seoTitle,
}: TestsTemplateProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (searchStr: any) => {
    if (typeof searchStr === "string") {
      setSelectedOption(searchStr);
    }
  };

  const handleClear = () => setSelectedOption("");

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
        <TestsSearchInput
          tests={tests}
          onClear={handleClear}
          value={selectedOption}
          onChange={handleChange}
        />
      </MainContainer>

      <MainContainer>
        <TestsList
          tests={tests.filter((test) => {
            if (selectedOption === "") {
              return true;
            }

            const searchingWithCode = test.code
              .toLowerCase()
              .includes(selectedOption.toLowerCase());
            const searchingWithName = test.name
              .toLowerCase()
              .includes(selectedOption.toLowerCase());

            return searchingWithName || searchingWithCode;
          })}
        />
      </MainContainer>
    </>
  );
}
