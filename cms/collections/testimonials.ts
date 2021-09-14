import { CmsCollection } from "netlify-cms-core";

export const testimonials: CmsCollection = {
  name: "testimonials",
  label: "Testimonials",
  label_singular: "Testimonial",
  create: true,
  delete: true,
  format: "yml",
  identifier_field: "person_title",
  folder: "data/testimonials",
  summary: "{{person_title}}: {{person_subtitle}}",
  fields: [
    {
      label: "Person Name",
      name: "person_title",
      widget: "string",
      hint: "The name of the person giving the testimony",
    },
    {
      label: "Person Job",
      name: "person_subtitle",
      widget: "string",
      hint: "The testimony giver's job or current position.",
    },
    {
      label: "Person Image",
      name: "person_image",
      widget: "image",
      hint: "The testimony giver's image.",
    },
    {
      label: "Testimonial",
      name: "testimonial",
      widget: "text",
      hint: "The testimony.",
    },
  ],
};
