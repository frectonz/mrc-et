import type { CmsCollection } from "netlify-cms-core";

export const news: CmsCollection = {
  name: "news",
  label: "News & Events",
  label_singular: "News or Event",
  create: true,
  delete: true,
  identifier_field: "title",
  folder: "data/news",
  summary: "{{filename}}",
  fields: [
    {
      label: "News Title",
      name: "title",
      widget: "string",
      hint: "The title of the news.",
    },
    {
      label: "News Description",
      name: "description",
      widget: "text",
      hint: "The description for the news.",
    },
    {
      label: "News image",
      name: "image",
      widget: "image",
      hint: "The image of the news.",
    },
    {
      label: "News date",
      name: "date",
      widget: "datetime",
      hint: "News publication date.",
    },
    {
      label: "News content",
      name: "body",
      widget: "markdown",
    },
  ],
};
