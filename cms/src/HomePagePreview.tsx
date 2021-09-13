import React from "react";

export default function HomePagePreview({ entry }: { entry: any }) {
  console.log(entry.getIn(["data", "headline_title"]));

  return <h1>Hello</h1>;
}
