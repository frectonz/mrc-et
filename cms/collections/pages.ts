import type { CmsCollection, CmsCollectionFile } from "netlify-cms-core";

const homePage: CmsCollectionFile = {
  name: "home",
  label: "Home",
  file: "data/pages/index.json",
  description: "Home page configuration",
  fields: [
    {
      label: "Headline",
      name: "headlines",
      widget: "list",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Detail",
          name: "detail",
          widget: "text",
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
        },
      ],
    },
    {
      label: "Collaborators",
      name: "collaborators",
      widget: "list",
      fields: [
        {
          name: "name",
          label: "Name",
          widget: "string",
        },
        {
          name: "url",
          label: "URL",
          widget: "string",
        },
        {
          name: "image",
          label: "Image",
          widget: "image",
        },
      ],
    },
    {
      label: "Recommended Links",
      name: "recommendedLinks",
      widget: "list",
      fields: [
        {
          name: "text",
          label: "Text",
          widget: "string",
        },
        {
          name: "url",
          label: "URL",
          widget: "string",
        },
      ],
    },
    {
      label: "Tests page label",
      name: "tests_page_label",
      widget: "string",
    },
    {
      label: "Contact page label",
      name: "contact_page_label",
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
  file: "data/pages/tests.json",
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

const aboutPage: CmsCollectionFile = {
  name: "about",
  label: "About Page",
  file: "data/pages/about.md",
  description: "About page configuration",
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
      label: "Aims and Objectives",
      name: "aims_and_objectives",
      widget: "list",
      allow_add: true,
      field: {
        label: "Aim or objective",
        name: "aim or objective",
        widget: "string",
      },
    },
    { label: "About content", name: "body", widget: "markdown" },
  ],
};

const servicesPage: CmsCollectionFile = {
  name: "services_page",
  label: "Services Page",
  file: "data/pages/services.json",
  description: "Services page configuration",
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
      label: "Services",
      name: "services",
      widget: "list",
      fields: [
        {
          name: "title",
          label: "Title",
          widget: "string",
        },
        {
          name: "url",
          label: "URL",
          widget: "string",
        },
        {
          name: "image",
          label: "Image",
          widget: "image",
        },
        {
          name: "detail",
          label: "Detail",
          widget: "text",
        },
      ],
    },
  ],
};

const newsPage: CmsCollectionFile = {
  name: "news_page",
  label: "News Page",
  file: "data/pages/news.json",
  description: "News page configuration",
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
  files: [homePage, testsPage, aboutPage, servicesPage, newsPage],
};
