import type { CmsCollection } from "netlify-cms-core";

export const tests: CmsCollection = {
  name: "tests",
  label: "Tests",
  create: true,
  delete: true,
  format: "yml",
  identifier_field: "test_code",
  folder: "data/tests",
  label_singular: "Test",
  summary: "{{filename}}: {{test_name}}",
  fields: [
    {
      label: "Test Code",
      name: "test_code",
      widget: "string",
      hint: "The test code. ",
      pattern: ["([A-Z]+)(\\d\\d\\d)", "E.g: GD001, HMG001, PP010"],
    },
    {
      label: "Test Name",
      name: "test_name",
      widget: "string",
      hint: "The name of the test.",
    },
    {
      label: "Price Birr",
      name: "price_birr",
      widget: "number",
      default: 1000,
    },
    {
      label: "Method",
      name: "method",
      widget: "string",
      default: "MLPA",
      hint: "The method used to conduct the test.",
    },
    {
      label: "Specimen",
      name: "specimen",
      widget: "string",
      hint: "The specimen needed to conduct the test.",
    },
    {
      label: "Specimen Volume",
      name: "specimen_volume",
      widget: "string",
      pattern: ["(\\d-\\d)|(\\d) cc+", "e.g. 3-4 cc, 1-4 cc, 3 cc"],
      hint: "The volume of the specimen needed to conduct the test. E.g: 1 cc , 2-3 cc",
    },
    {
      label: "Temperature",
      name: "temperature",
      widget: "string",
      hint: "The temperature the specimen must be kept under in centigrade. E.g: 2-8 °C (24hrs.) °F (>24hrs.)",
    },
    {
      label: "Frequency",
      name: "frequency",
      widget: "string",
      hint: "The frequency in which the test is conducted. E.g: Daily 15:00 hrs",
    },
    {
      label: "Reported After",
      name: "reported_after",
      widget: "string",
      hint: "Time it takes to conduct the test. E.g: 1-2 weeks",
    },
    {
      label: "Test Category",
      name: "test_category",
      widget: "string",
      hint: "The category of the test.",
    },
  ],
};
