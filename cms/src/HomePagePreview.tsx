import React from "react";
import { HomePageTemplate } from "../../template/HomePage";

export default function HomePagePreview({ entry }: { entry: any }) {
  const headlineTitle = entry.getIn(["data", "headline_title"]);
  const headlineDetail = entry.getIn(["data", "headline_detail"]);
  const headlineImage = entry.getIn(["data", "headline_image"]);

  const headlineButton1Label = entry.getIn(["data", "headline_button1_label"]);
  const headlineButton1Link = entry.getIn(["data", "headline_button1_link"]);

  const headlineButton2Label = entry.getIn(["data", "headline_button2_label"]);
  const headlineButton2Link = entry.getIn(["data", "headline_button2_link"]);

  return (
    <HomePageTemplate
      indexPageData={{
        headlineTitle,
        headlineDetail,
        headlineImage,
        headlineButton1Label,
        headlineButton1Link,
        headlineButton2Label,
        headlineButton2Link,
      }}
      services={[]}
    />
  );
}
