// NextJs
import { GetStaticProps } from "next";

// Components
import Seo from "../../components/utils/Seo";
import Hero from "../../components/main/Hero";
import NewsCard from "../../components/main/News/NewsCard";
import MainContainer from "../../components/utils/MainContainer";

// Interfaces
import { NewsData } from "../../interfaces/NewsData";

// Data
import newsData from "../../data/pages/news.json";

interface NewsPage {
  newses: NewsData[];
}

export default function News({ newses }: NewsPage) {
  return (
    <>
      <Seo title="News" />
      <Hero
        title={newsData.headline_title}
        text={newsData.headline_detail}
        image={newsData.headline_image}
        textColor="white"
      />
      <MainContainer>
        {newses.map((news, i) => {
          return <NewsCard key={i} news={news} />;
        })}
      </MainContainer>
    </>
  );
}

// Library
import { getAllNewses } from "../../lib/news";

export const getStaticProps: GetStaticProps<NewsPage> = () => {
  const newses = getAllNewses();

  return { props: { newses } };
};
