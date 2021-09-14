import { useEffect, useState } from "react";

// NextJs
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

// Interfaces
import { TestData } from "../interfaces/Test";

// Components
import Hero from "../components/main/Hero";
import Layout from "../components/layout/Layout";
import TestsList from "../components/tests/TestsList";
import MainContainer from "../components/utils/MainContainer";

// AutoComplete
import {
  AutoComplete,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteInput,
} from "@choc-ui/chakra-autocomplete";

// Interfaces
import { TestsPageData } from "../lib/testsPage";
import { FooterData } from "../interfaces/FooterData";

interface TestsPageProps {
  tests: TestData[];
  hero: TestsPageData;
  footerData: FooterData;
}

export default function TestsPage({ tests, footerData, hero }: TestsPageProps) {
  const { query } = useRouter();
  const [testsList, setTestsList] = useState(tests);

  useEffect(() => {
    const code = query?.code;
    if (typeof code === "string") {
      setTestsList(
        testsList.filter((test) =>
          test.code.toLowerCase().includes(code.toLowerCase())
        )
      );
    }
  }, [query, setTestsList]);

  const testCodes = tests.map((test) => {
    return {
      value: test.code,
      label: test.code,
    };
  });

  const testNames = tests.map((test) => {
    return {
      value: test.name,
      label: test.name,
    };
  });

  const options = [
    {
      value: "",
      label: "",
    },
    ...testCodes,
    ...testNames,
  ];

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

  return (
    <Layout footerData={footerData}>
      <Hero
        textColor="white"
        image={hero.headlineImage}
        title={hero.headlineTitle}
        text={hero.headlineDetail}
      />
      <MainContainer my={30}>
        <AutoComplete onChange={handleChange}>
          <AutoCompleteInput
            autoComplete="none"
            placeholder="Type in a test code or test name. Click enter to search"
          />
          <AutoCompleteList>
            {options.map((option, oid) => (
              <AutoCompleteItem
                id={`opt-${oid}`}
                key={`opt-${oid}`}
                value={option.value}
              >
                {option.label}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </MainContainer>

      <MainContainer>
        <TestsList tests={testsList} />
      </MainContainer>
    </Layout>
  );
}

// Library
import { getAllTests } from "../lib/tests";
import { readIndexPageData } from "../lib/indexPage";
import { readTestsPageData } from "../lib/testsPage";

export const getStaticProps: GetStaticProps<TestsPageProps> = () => {
  const tests = getAllTests();
  const indexPageData = readIndexPageData();
  const testsPageData = readTestsPageData();

  return { props: { tests, footerData: indexPageData, hero: testsPageData } };
};
