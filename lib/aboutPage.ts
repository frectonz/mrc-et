import { join } from "path";
import matter from "gray-matter";
import { readFileSync } from "fs";

// MDX
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const aboutPage = join(process.cwd(), "data", "pages", "about.md");

export interface AboutPageData {
  headlineTitle: string;
  headlineDetail: string;
  aims: string[];
  content: MDXRemoteSerializeResult;
}

export const readAboutPageData = async (): Promise<AboutPageData> => {
  const content = readFileSync(aboutPage, "utf-8");
  const { data, content: markdown } = matter(content);
  const serialized = await serialize(markdown);

  return {
    headlineTitle: data.headline_title,
    headlineDetail: data.headline_detail,
    aims: data.aims_and_objectives,
    content: serialized,
  };
};
