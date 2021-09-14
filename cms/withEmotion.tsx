import React from "react";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";

const memoizedCreateCacheWithContainer = weakMemoize((container: any) => {
  let newCache = createCache({ key: "chakra-ui", container });
  return newCache;
});

export default (Component: any) => (props: any) => {
  const iframe: any = document.querySelector("#nc-root iframe");
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  return (
    // @ts-ignore
    <CacheProvider value={memoizedCreateCacheWithContainer(iframeHeadElem)}>
      <Component {...props} />
    </CacheProvider>
  );
};
