// NextJs
import { GetStaticProps, GetStaticPaths } from "next";

// MDX
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// Components
import Hero from "../../components/main/Hero";
import Layout from "../../components/layout/Layout";
import MainContainer from "../../components/utils/MainContainer";

// Interfaces
import { BlogData } from "../../interfaces/BlogData";
import { FooterData } from "../../interfaces/FooterData";

// Components
import { components } from "../../components/utils/components";

interface BlogPageProps {
  blogData: BlogData;
  footerData: FooterData;
  serializedContent: MDXRemoteSerializeResult;
}

export default function BlogPage({
  blogData,
  footerData,
  serializedContent,
}: BlogPageProps) {
  return (
    <Layout footerData={footerData}>
      <Hero
        textColor="white"
        image={blogData.image}
        title={blogData.title}
        text={blogData.detail}
      />
      <MainContainer py={100}>
        <MDXRemote {...serializedContent} components={components} />
      </MainContainer>
    </Layout>
  );
}

// Library
import { readIndexPageData } from "../../lib/indexPage";
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
  const indexPageData = readIndexPageData();
  const blogData = readBlogFile(`${params?.id}.md`);
  const serializedContent = await getContent(`${params?.id}.md`);

  return { props: { footerData: indexPageData, serializedContent, blogData } };
};
