import type { CmsCollection } from "netlify-cms-core";

export const services: CmsCollection = {
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
      label: "Service Image",
      name: "image",
      widget: "image",
      hint: "The icon for the service.",
    },
    {
      label: "Service",
      name: "description",
      widget: "text",
      hint: "A description of the service.",
    },
  ],
};
