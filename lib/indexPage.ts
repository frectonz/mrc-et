import { join } from "path";
import { parse } from "yaml";
import { readFileSync } from "fs";

const indexPage = join(process.cwd(), "data", "pages", "index.yml");

export interface IndexPageData {
  headlineTitle: string;
  headlineDetail: string;
  headlineImage: string;

  goToTestsLabel: string;
  goToContactPageLabel: string;
}

export const readIndexPageData = (): IndexPageData => {
  const content = readFileSync(indexPage, "utf-8");

  const data = parse(content);

  return {
    headlineTitle: data.headline_title,
    headlineDetail: data.headline_detail,
    headlineImage: data.headline_image,

    goToTestsLabel: data.go_to_tests_page_label,
    goToContactPageLabel: data.go_to_contact_page_label,
  };
};
