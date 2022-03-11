import dayjs from "dayjs";
import { join } from "path";
import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";

// Interfaces
import { NewsData } from "../interfaces/NewsData";

// MDX
import { serialize } from "next-mdx-remote/serialize";

const NEWS_DIR = join(process.cwd(), "/data/news");

const formatDate = (date: string) => dayjs(date).format("MMM DD, YYYY");

export function getAllNewses(): NewsData[] {
  return readdirSync(NEWS_DIR)
    .map((newsFile) => readNewsFile(newsFile))
    .sort(({ date: a }, { date: b }) => {
      const dateA = new Date(a).getTime();
      const dateB = new Date(b).getTime();
      return dateA - dateB;
    });
}

export function readNewsFile(newsFile: string): NewsData {
  const content = readFileSync(join(NEWS_DIR, newsFile), "utf-8");
  const { data } = matter(content);

  return {
    id: newsFile.replace(".md", ""),
    title: data.title,
    image: data.image,
    description: data.description,
    date: formatDate(data.date),
  };
}

export async function getContent(newsFile: string) {
  const fileContent = readFileSync(join(NEWS_DIR, newsFile), "utf-8");
  const { content } = matter(fileContent);
  const serialized = await serialize(content);

  return serialized;
}
