// NextJs
import { GetStaticProps, GetStaticPaths } from "next";

// MDX
import { MDXRemoteSerializeResult } from "next-mdx-remote";

// Interfaces
import { BlogData } from "../../interfaces/BlogData";

// Components
import Seo from "../../components/utils/Seo";
import Hero from "../../components/main/Hero";
import MarkdownDisplay from "../../components/main/MarkdownDisplay";
import MainContainer from "../../components/utils/MainContainer";

interface BlogPageProps {
  blogData: BlogData;
  serializedContent: MDXRemoteSerializeResult;
}

export default function BlogPage({
  blogData,
  serializedContent,
}: BlogPageProps) {
  return (
    <>
      <Seo title={blogData.title} />
      <Hero
        textColor="white"
        image={blogData.image}
        title={blogData.title}
        text={blogData.detail}
      />
      <MainContainer py={100}>
        <MarkdownDisplay content={serializedContent} />
      </MainContainer>
    </>
  );
}

// Library
import { getAllBlogs, getContent, readBlogFile } from "../../lib/blogs";

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = getAllBlogs();

  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          id: blog.id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  params,
}) => {
  const blogFile = `${params?.id}.md`;
  const blogData = readBlogFile(blogFile);
  const serializedContent = await getContent(blogFile);

  return { props: { serializedContent, blogData } };
};
