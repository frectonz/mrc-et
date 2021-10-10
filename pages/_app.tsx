// NextJs
import { AppProps } from "next/app";

// Components
import Layout from "../components/layout/Layout";

// ChakraUI
import { ChakraProvider } from "@chakra-ui/react";

// data
import indexPageData from "../data/pages/index.json";

const footerData = {
  email: indexPageData.email,
  phone: indexPageData.phone,
  address: indexPageData.address,
  twitter: indexPageData.twitter,
  facebook: indexPageData.facebook,
  linkedin: indexPageData.linkedin,
  licenseInformation: indexPageData.license_information,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout footerData={footerData}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
