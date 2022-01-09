// AutoComplete
import {
  AutoComplete,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteInput,
} from "@choc-ui/chakra-autocomplete";

// Interfaces
import { TestData } from "../../interfaces/TestData";

interface TestsSearchInputProps {
  tests: TestData[];
  onChange: (value: any) => void;
}

export default function TestsSearchInput({
  tests,
  onChange,
}: TestsSearchInputProps) {
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

  const options = [{ value: "", label: "" }, ...testCodes, ...testNames];

  return (
    <AutoComplete emptyState={false} onChange={onChange}>
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
  );
}
