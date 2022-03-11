// NextJs
import { GetStaticProps, GetStaticPaths } from "next";

// MDX
import { MDXRemoteSerializeResult } from "next-mdx-remote";

// Interfaces
import { NewsData } from "../../interfaces/NewsData";

// Components
import Seo from "../../components/utils/Seo";
import Hero from "../../components/main/Hero";
import MainContainer from "../../components/utils/MainContainer";
import MarkdownDisplay from "../../components/main/MarkdownDisplay";

interface NewPageProps {
  newsData: NewsData;
  serializedContent: MDXRemoteSerializeResult;
}

export default function NewsPage({
  newsData,
  serializedContent,
}: NewPageProps) {
  return (
    <>
      <Seo title={newsData.title} />
      <Hero
        textColor="white"
        image={newsData.image}
        title={newsData.title}
        text={newsData.description}
      />
      <MainContainer py={100}>
        <MarkdownDisplay content={serializedContent} />
      </MainContainer>
    </>
  );
}

// Library
import { getAllNewses, getContent, readNewsFile } from "../../lib/news";

export const getStaticPaths: GetStaticPaths = async () => {
  const newses = getAllNewses();

  return {
    paths: newses.map((news) => {
      return {
        params: {
          id: news.id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<NewPageProps> = async ({
  params,
}) => {
  const newsFile = `${params?.id}.md`;
  const newsData = readNewsFile(newsFile);
  const serializedContent = await getContent(newsFile);

  return { props: { serializedContent, newsData } };
};
