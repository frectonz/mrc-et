import type { CmsCollection } from "netlify-cms-core";

export const blogs: CmsCollection = {
  name: "blogs",
  label: "Blogs",
  label_singular: "Blog",
  create: true,
  delete: true,
  identifier_field: "title",
  folder: "data/blogs",
  summary: "{{filename}}",
  fields: [
    {
      label: "Blog Title",
      name: "title",
      widget: "string",
      hint: "The title of the blog.",
    },
    {
      label: "Blog Detail",
      name: "detail",
      widget: "text",
      hint: "The details for the blog.",
    },
    {
      label: "Blog image",
      name: "image",
      widget: "image",
      hint: "The image of the blog.",
    },
    {
      label: "Blog date",
      name: "date",
      widget: "datetime",
      hint: "The date of the blog.",
    },
    { label: "Blog content", name: "body", widget: "markdown" },
  ],
};
