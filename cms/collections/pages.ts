import { CmsCollection, CmsCollectionFile } from "netlify-cms-core";

const homePage: CmsCollectionFile = {
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
    {
      label: "Phone",
      name: "phone",
      widget: "string",
    },
    {
      label: "Email",
      name: "email",
      widget: "string",
    },
    {
      label: "Address",
      name: "address",
      widget: "string",
    },
    {
      label: "Twitter",
      name: "twitter",
      widget: "string",
    },
    {
      label: "Facebook",
      name: "facebook",
      widget: "string",
    },
    {
      label: "Linkedin",
      name: "linkedin",
      widget: "string",
    },
    {
      label: "License information",
      name: "license_information",
      widget: "text",
    },
  ],
};

const testsPage: CmsCollectionFile = {
  name: "tests_page",
  label: "Tests Page",
  file: "data/pages/tests.yml",
  description: "Tests page configuration",
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
  ],
};

export const pages: CmsCollection = {
  name: "pages",
  label: "Pages",
  delete: false,
  files: [homePage, testsPage],
};
