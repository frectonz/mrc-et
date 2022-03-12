// NextJs
import NextLink from "next/link";

// React
import { FunctionComponent } from "react";

// Components
import MotionBox from "../../utils/MotionBox";

// Interfaces
import { NewsData } from "../../../interfaces/NewsData";

// Chakra UI
import { Grid, Flex, Image, Text, Heading } from "@chakra-ui/react";

interface NewsProps {
  news: NewsData;
}

const NewsCard: FunctionComponent<NewsProps> = ({ news }) => {
  return (
    <NextLink href={`/news/${news.id}`}>
      <a>
        <MotionBox my={10} p={5}>
          <Grid
            gap={10}
            templateColumns={["repeat(1, 1fr)", null, "350px 1fr"]}
          >
            <Flex align="center">
              <Image src={news.image} alt="news-1" />
            </Flex>
            <Flex align="flex-start" justify="center" flexDirection="column">
              <Text>{news.date}</Text>
              <Heading my={2}>{news.title}</Heading>
              <Text>{news.description}</Text>
            </Flex>
          </Grid>
        </MotionBox>
      </a>
    </NextLink>
  );
};

export default NewsCard;
