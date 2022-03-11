// NextJs
import NextLink from "next/link";

// React
import { FunctionComponent } from "react";

// Interfaces
import { NewsData } from "../../../interfaces/NewsData";

// Chakra UI
import { Grid, Flex, Image, Text, Heading, Link } from "@chakra-ui/react";

interface NewsProps {
  news: NewsData;
}

const NewsCard: FunctionComponent<NewsProps> = ({ news }) => {
  return (
    <Grid
      my={10}
      gap={10}
      templateColumns={["repeat(1, 1fr)", null, "350px 1fr"]}
    >
      <Flex align="center">
        <Image src={news.image} alt="news-1" />
      </Flex>
      <Flex align="flex-start" justify="center" flexDirection="column">
        <Text>{news.date}</Text>
        <Heading my={2}>
          <Link>
            <NextLink href={`/news/${news.id}`}>
              <a>{news.title}</a>
            </NextLink>
          </Link>
        </Heading>
        <Text>{news.description}</Text>
      </Flex>
    </Grid>
  );
};

export default NewsCard;
