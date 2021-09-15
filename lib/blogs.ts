import dayjs from "dayjs";
import { join } from "path";
import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";

// NDX
import { serialize } from "next-mdx-remote/serialize";

// Interfaces
import { BlogData } from "../interfaces/BlogData";

const BLOGS_DIR = join(process.cwd(), "/data/blogs");

const formatDate = (date: string) => dayjs(date).format("ddd, MMM DD, YYYY");

export function getAllBlogs(): BlogData[] {
  return readdirSync(BLOGS_DIR).map((testFile) => readBlogFile(testFile));
}

export function readBlogFile(testFile: string): BlogData {
  const content = readFileSync(join(BLOGS_DIR, testFile), "utf-8");
  const { data } = matter(content);

  return {
    id: testFile.replace(".md", ""),
    title: data.title,
    image: data.image,
    detail: data.detail,
    date: formatDate(data.date),
  };
}

export async function getContent(testFile: string) {
  const fileContent = readFileSync(join(BLOGS_DIR, testFile), "utf-8");
  const { content } = matter(fileContent);
  const serialized = await serialize(content);

  return serialized;
}
