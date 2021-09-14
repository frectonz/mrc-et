import CMS from "netlify-cms-app";
import { CmsConfig } from "netlify-cms-core";

const config: CmsConfig = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  local_backend: true,
  media_folder: "public/hero",
  public_folder: "/hero",
  site_url: "https://mrc-et.netlify.app",
  display_url: "https://mrc-et.netlify.app",
  editor: {
    preview: false,
  },
  collections: [
    {
      name: "pages",
      label: "Pages",
      delete: false,
      files: [
        {
          name: "home",
          label: "Home",
          file: "data/pages/index.yml",
          description: "Home page configuration",
          fields: [
            {
              label: "Headline Title",
              name: "headline_title",
              widget: "string",
            },
            {
              label: "Headline Detail",
              name: "headline_detail",
              widget: "text",
            },
            {
              label: "Headline Image",
              name: "headline_image",
              widget: "image",
            },
            {
              label: "Go to tests page label",
              name: "go_to_tests_page_label",
              widget: "string",
            },
            {
              label: "Go to contact page label",
              name: "go_to_contact_page_label",
              widget: "string",
            },
          ],
        },
      ],
    },
    {
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
    },
    {
      name: "services",
      label: "Services",
      label_singular: "Service",
      create: true,
      delete: true,
      format: "yml",
      identifier_field: "title",
      folder: "data/services",
      summary: "{{code}}: {{filename}}",
      fields: [
        {
          label: "Service Code",
          name: "code",
          widget: "string",
          hint: "The service code. E.g: GD, HC, HMG",
        },
        {
          label: "Service Name",
          name: "title",
          widget: "string",
          hint: "The name of the service.",
        },
        {
          label: "Service",
          name: "description",
          widget: "text",
          hint: "A description of the service.",
        },
      ],
    },
  ],
};

CMS.init({
  config,
});
