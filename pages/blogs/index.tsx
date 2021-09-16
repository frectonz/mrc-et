// NextJs
import { GetStaticProps } from "next";

// Components
import Seo from "../../components/utils/Seo";
import Hero from "../../components/main/Hero";
import Layout from "../../components/layout/Layout";
import MainContainer from "../../components/utils/MainContainer";
import TwoColumnSection from "../../components/main/TwoColumnSection/TwoColumnSection";

// Interfaces
import { BlogData } from "../../interfaces/BlogData";
import { FooterData } from "../../interfaces/FooterData";

interface BlogsPage {
  blogs: BlogData[];
  footerData: FooterData;
}

export default function Blogs({ footerData, blogs }: BlogsPage) {
  return (
    <>
      <Seo title="Blogs" />
      <Layout footerData={footerData}>
        <Hero title="Blogs" text="" image="/image/lab.jpg" textColor="white" />
        <MainContainer>
          {blogs.map((blog, i) => {
            return (
              <TwoColumnSection
                key={i}
                title={blog.title}
                text={blog.detail}
                linkText="Read More"
                imageLink={blog.image}
                link={`/blogs/${blog.id}`}
              />
            );
          })}
        </MainContainer>
      </Layout>
    </>
  );
}

// Library
import { getAllBlogs } from "../../lib/blogs";
import { readIndexPageData } from "../../lib/indexPage";

export const getStaticProps: GetStaticProps<BlogsPage> = () => {
  const blogs = getAllBlogs();
  const indexPageData = readIndexPageData();

  return { props: { footerData: indexPageData, blogs } };
};
