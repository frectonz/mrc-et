import { join } from "path";
import { parse } from "yaml";
import { readFileSync } from "fs";

const testsPage = join(process.cwd(), "data", "pages", "tests.yml");

export interface TestsPageData {
  headlineTitle: string;
  headlineImage: string;
  headlineDetail: string;
}

export const readTestsPageData = (): TestsPageData => {
  const content = readFileSync(testsPage, "utf-8");

  const data = parse(content);

  return {
    headlineTitle: data.headline_title,
    headlineDetail: data.headline_detail,
    headlineImage: data.headline_image,
  };
};
