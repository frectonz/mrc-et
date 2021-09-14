import React from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { PreviewTemplateComponentProps } from "netlify-cms-core";

// ChakraUI
import { Flex, Spacer, ChakraProvider } from "@chakra-ui/react";

// Components
import Hero from "../components/main/Hero";
import SecondaryButton from "../components/utils/SecondaryButton";

export default function HomePagePreview({
  entry,
  window,
  document,
}: PreviewTemplateComponentProps) {
  const headlineTitle = entry.getIn(["data", "headline_title"]);
  const headlineDetail = entry.getIn(["data", "headline_detail"]);
  const headlineImage = entry.getIn(["data", "headline_image"]);

  const headlineButton1Label = entry.getIn(["data", "headline_button1_label"]);
  const headlineButton1Link = entry.getIn(["data", "headline_button1_link"]);

  const headlineButton2Label = entry.getIn(["data", "headline_button2_label"]);
  const headlineButton2Link = entry.getIn(["data", "headline_button2_link"]);

  return (
    <ChakraProvider>
      <Hero
        textColor="white"
        title={headlineTitle}
        text={headlineDetail}
        image={headlineImage}
      >
        <Flex>
          <SecondaryButton size="md">{headlineButton1Label}</SecondaryButton>
          <Spacer width={10} />
          <SecondaryButton size="md">{headlineButton2Label}</SecondaryButton>
        </Flex>
      </Hero>
    </ChakraProvider>
  );
}
