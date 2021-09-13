import CMS from "netlify-cms-app";
import HomePagePreview from "./HomePagePreview";

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    media_folder: "public/hero",
    public_folder: "/hero",
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
                widget: "string",
              },
              {
                label: "Headline Image",
                name: "headline_image",
                widget: "image",
              },
              {
                label: "Headline Button 1 Label",
                name: "headline_button1_label",
                widget: "string",
              },
              {
                label: "Headline Button 1 Link",
                name: "headline_button1_link",
                widget: "string",
              },
              {
                label: "Headline Button 2 Label",
                name: "headline_button2_label",
                widget: "string",
              },
              {
                label: "Headline Button 2 Link",
                name: "headline_button2_link",
                widget: "string",
              },
            ],
          },
        ],
      },
    ],
  },
});

CMS.registerPreviewTemplate("home", HomePagePreview);
