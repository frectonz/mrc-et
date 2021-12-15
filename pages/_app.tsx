// NextJs
import { AppProps } from "next/app";

// Components
import Layout from "../components/layout/Layout";

// ChakraUI
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// data
import indexPageData from "../data/pages/index.json";

// Interfaces
import { FooterData } from "../interfaces/FooterData";

const footerData: FooterData = {
  email: indexPageData.email,
  phone: indexPageData.phone,
  address: indexPageData.address,
  twitter: indexPageData.twitter,
  facebook: indexPageData.facebook,
  linkedin: indexPageData.linkedin,
  recommendedLinks: indexPageData.recommendedLinks,
  licenseInformation: indexPageData.license_information,
};

const theme = extendTheme({
  colors: {
    brand: {
      secondary: "#51b6e8",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout footerData={footerData}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
