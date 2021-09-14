import CMS from "netlify-cms-app";
import { CmsConfig } from "netlify-cms-core";

// Collections;
import { pages } from "./collections/pages";
import { tests } from "./collections/tests";
import { services } from "./collections/services";
import { testimonials } from "./collections/testimonials";

const config: CmsConfig = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  editor: {
    preview: false,
  },
  local_backend: true,
  public_folder: "/hero",
  media_folder: "public/hero",
  site_url: "https://mrc-et.netlify.app",
  display_url: "https://mrc-et.netlify.app",
  logo_url: "/logo.png",
  collections: [pages, tests, services, testimonials],
};

CMS.init({
  config,
});
