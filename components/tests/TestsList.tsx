// Components
import TestCard from "./TestCard";

// ChakraUI
import { Divider, Stack } from "@chakra-ui/react";

// Interfaces
import { TestData } from "../../interfaces/Test";

interface TestsListProps {
  tests: TestData[];
}

export default function TestsList({ tests }: TestsListProps) {
  return (
    <Stack py={5} spacing={5} divider={<Divider />}>
      {tests.map((test, i) => (
        <TestCard key={i} test={test} />
      ))}
    </Stack>
  );
}
