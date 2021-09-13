import { useState } from "react";

// NextJs
import { GetStaticProps } from "next";

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

interface TestsPageProps {
  tests: TestData[];
}

export default function TestsPage({ tests }: TestsPageProps) {
  const [testsList, setTestsList] = useState(tests);

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
    <Layout>
      <Hero
        textColor="white"
        image="/hero/lab.jpg"
        title="Lorem, ipsum dolor."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus."
      />
      <MainContainer my={50}>
        <AutoComplete onChange={handleChange}>
          <AutoCompleteInput
            autoComplete="none"
            placeholder="Type in a test code or test name. Click enter to search"
          />
          <AutoCompleteList>
            {options.map((option, oid) => (
              <AutoCompleteItem key={`opt-${oid}`} value={option.value}>
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

export const getStaticProps: GetStaticProps<TestsPageProps> = () => {
  const tests = getAllTests();

  return { props: { tests } };
};
