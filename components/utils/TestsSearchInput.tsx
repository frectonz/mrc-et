// React Icons
import { useState } from "react";

// React Icons
import { HiX as CloseIcon } from "react-icons/hi";

// AutoComplete
import {
  AutoComplete,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteInput,
} from "@choc-ui/chakra-autocomplete";

// Chakra Ui
import { Grid, IconButton } from "@chakra-ui/react";

// Interfaces
import { TestData } from "../../interfaces/TestData";

interface TestsSearchInputProps {
  tests: TestData[];
  value: string;
  onClear: () => void;
  onChange: (value: any) => void;
}

export default function TestsSearchInput({
  tests,
  value,
  onClear,
  onChange,
}: TestsSearchInputProps) {
  const [autocompleteInput, setAutocompleteInput] = useState("");

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
    <Grid gap={5} templateColumns={value === "" ? "1fr" : "1fr 100px"}>
      <AutoComplete
        value={value}
        emptyState={false}
        onChange={(val) => onChange(val)}
        onSelectOption={(val) => setAutocompleteInput(val.item.value)}
      >
        <AutoCompleteInput
          autoComplete="none"
          value={autocompleteInput}
          onChange={(e) => setAutocompleteInput(e.target.value)}
          placeholder="Type in a test code or test name. Select the test you want to search for"
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
      {value !== "" ? (
        <IconButton
          aria-label="clear input"
          onClick={() => {
            setAutocompleteInput("");
            onClear();
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </Grid>
  );
}
