// ChakraUI
import {
  Tr,
  Td,
  Box,
  Badge,
  Table,
  Tbody,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

// Interfaces
import { TestData } from "../../interfaces/Test";

// Components
import PrimaryButton from "../utils/PrimaryButton";

interface TestCardProps {
  test: TestData;
}

export default function TestCard({ test }: TestCardProps) {
  const size = useBreakpointValue({
    lg: "lg",
    md: "md",
    base: "sm",
  });

  return (
    <Box p={5} boxShadow="xl">
      <Badge>{test.code}</Badge>
      <Heading size={size}>{test.name}</Heading>

      <Table my={5} size={size} variant="striped">
        <Tbody>
          <Tr>
            <Td>Method</Td>
            <Td>{test.method}</Td>
          </Tr>

          <Tr>
            <Td>Specimen</Td>
            <Td>{test.specimen}</Td>
          </Tr>

          <Tr>
            <Td>Specimen Volume</Td>
            <Td>{test.specimenVolume}</Td>
          </Tr>

          <Tr>
            <Td>Specimen Temperature</Td>
            <Td>{test.temperature}</Td>
          </Tr>

          <Tr>
            <Td>Test conducted</Td>
            <Td>{test.frequency}</Td>
          </Tr>

          <Tr>
            <Td>Result delivered after</Td>
            <Td>{test.timePeriod}</Td>
          </Tr>
        </Tbody>
      </Table>
      <PrimaryButton float="right" size={size}>
        Book a test
      </PrimaryButton>
    </Box>
  );
}
