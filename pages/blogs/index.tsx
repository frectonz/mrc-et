// NextJs
import { GetStaticProps } from "next";

// Components
import Seo from "../../components/utils/Seo";
import Hero from "../../components/main/Hero";
import MainContainer from "../../components/utils/MainContainer";
import TwoColumnSection from "../../components/main/TwoColumnSection/TwoColumnSection";

// Interfaces
import { BlogData } from "../../interfaces/BlogData";

// Data
import blogsData from "../../data/pages/blogs.json";

interface BlogsPage {
  blogs: BlogData[];
}

export default function Blogs({ blogs }: BlogsPage) {
  return (
    <>
      <Seo title="Blogs" />
      <Hero
        title={blogsData.headline_title}
        text={blogsData.headline_detail}
        image={blogsData.headline_image}
        textColor="white"
      />
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
    </>
  );
}

// Library
import { getAllBlogs } from "../../lib/blogs";

export const getStaticProps: GetStaticProps<BlogsPage> = () => {
  const blogs = getAllBlogs();

  return { props: { blogs } };
};
