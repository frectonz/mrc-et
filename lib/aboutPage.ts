import { join } from "path";
import { parse } from "yaml";
import { readFileSync } from "fs";

const aboutPage = join(process.cwd(), "data", "pages", "about.yml");

export interface AboutPageData {
  headlineTitle: string;
  headlineDetail: string;

  aims: string[];
}

export const readAboutPageData = (): AboutPageData => {
  const content = readFileSync(aboutPage, "utf-8");

  const data = parse(content);

  return {
    headlineTitle: data.headline_title,
    headlineDetail: data.headline_detail,
    aims: data.aims_and_objectives,
  };
};
