import CMS from "netlify-cms-app";

// Collections
import { pages } from "./collections/pages";
import { tests } from "./collections/tests";
import { blogs } from "./collections/blogs";
import { services } from "./collections/services";
import { testimonials } from "./collections/testimonials";

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    editor: {
      preview: false,
    },
    local_backend: true,
    logo_url: "/logo.webp",
    public_folder: "/image",
    media_folder: "public/image",
    site_url: "https://mrc-et.netlify.app",
    display_url: "https://mrc-et.netlify.app",
    collections: [pages, tests, services, testimonials, blogs],
  },
});
