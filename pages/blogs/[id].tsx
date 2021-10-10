// NextJs
import { GetStaticProps, GetStaticPaths } from "next";

// MDX
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// Components
import Seo from "../../components/utils/Seo";
import Hero from "../../components/main/Hero";
import MainContainer from "../../components/utils/MainContainer";

// Interfaces
import { BlogData } from "../../interfaces/BlogData";

// MDX Components
import { components } from "../../components/utils/components";

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
        <MDXRemote {...serializedContent} components={components} />
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
  const blogData = readBlogFile(`${params?.id}.md`);
  const serializedContent = await getContent(`${params?.id}.md`);

  return { props: { serializedContent, blogData } };
};
