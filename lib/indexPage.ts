import { join } from "path";
import { parse } from "yaml";
import { readFileSync } from "fs";

const indexPage = join(process.cwd(), "data", "pages", "index.yml");

export interface IndexPageData {
  headlineTitle: string;
  headlineDetail: string;
  headlineImage: string;

  headlineButton1Label: string;
  headlineButton1Link: string;

  headlineButton2Label: string;
  headlineButton2Link: string;
}

export const readIndexPageData = (): IndexPageData => {
  const content = readFileSync(indexPage, "utf-8");

  const data = parse(content);

  return {
    headlineTitle: data.headline_title,
    headlineDetail: data.headline_detail,
    headlineImage: data.headline_image,

    headlineButton1Label: data.headline_button1_label,
    headlineButton1Link: data.headline_button1_link,

    headlineButton2Label: data.headline_button2_label,
    headlineButton2Link: data.headline_button2_link,
  };
};
