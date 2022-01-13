// ReactJs
import { FunctionComponent } from "react";

// NextJs
import NextLink from "next/link";

// ChakraUI
import { Grid, Heading, Link, Stack, Text } from "@chakra-ui/react";

// Components
import Seo from "../components/utils/Seo";
import Blob from "../components/main/Cards/Blob";
import MotionBox from "../components/utils/MotionBox";
import MainContainer from "../components/utils/MainContainer";
import SecondaryButton from "../components/utils/SecondaryButton";

interface BookTestPageProps {}

export default function BookTestPage({}: BookTestPageProps) {
  return (
    <>
      <Seo title="About" />
      <MainContainer pt={150} pb={30}>
        <Heading textAlign="center" py={5} size="2xl">
          Instructions on booking a test
        </Heading>
      </MainContainer>

      <MainContainer>
        <Grid gap={10} p={10} templateColumns="repeat(1, 1fr)">
          <StepCard
            stepNum={1}
            title="Download the PDF"
            download={{
              label: "Test Request Form",
              url: "/interactive-test-request-form.pdf",
            }}
          >
            The PDF contains a test request form. It also also contains all the
            tests we provide. If you want more information on the tests{" "}
            <NextLink href="/contact">
              <Link color="brand.secondary">contact us</Link>
            </NextLink>
            .
          </StepCard>

          <StepCard stepNum={2} title="Fill out the PDF">
            The PDF file is interactive which means that you can fill out the
            form in your browser. After you finish filling out the form download
            or save the PDF to your local storage.
          </StepCard>

          <StepCard
            stepNum={3}
            title="Collect the specimen"
            download={{
              label: "Sampling Techniques",
              url: "/sampling-techniques.pdf",
            }}
          >
            Collect the specific kind of specimen needed for the test you chose
            from the interactive PDF. You can ask us more information on how to
            collect the specimen by e-mailing us at{" "}
            <Emphasis>info@mrc-et.com</Emphasis> or by calling us at{" "}
            <Emphasis>+251116394118</Emphasis>. We have created a PDF on how to
            collect the specimen which you can use as a reference.
          </StepCard>

          <StepCard stepNum={4} title="Send a test request e-mail">
            Send us the form you filled out in the previous step via e-mail at
            this address <Emphasis>info@mrc-et.com</Emphasis>. If you do not
            want to send the form via e-mail, call us at{" "}
            <Emphasis>+251116394118</Emphasis>.
          </StepCard>
        </Grid>
      </MainContainer>
    </>
  );
}

const StepCard: FunctionComponent<{
  title: string;
  stepNum: number;
  download?: {
    label: string;
    url: string;
  };
}> = ({ title, stepNum, children, download }) => (
  <MotionBox p={10}>
    <Blob />
    <Numbering num={stepNum} />
    <Stack>
      <Heading size="lg">{title}</Heading>
      <Heading size="md" fontWeight="normal">
        {children}
      </Heading>
    </Stack>
    {download && <DownloadBtn label={download.label} link={download.url} />}
  </MotionBox>
);

const Emphasis: FunctionComponent = ({ children }) => (
  <Text color="brand.secondary" display="inline">
    {children}
  </Text>
);

const Numbering: FunctionComponent<{ num: number }> = ({ num }) => (
  <Heading
    style={{
      position: "absolute",
      top: "5%",
      left: "-1%",
    }}
  >
    {num}
  </Heading>
);

const DownloadBtn: FunctionComponent<{ label: string; link: string }> = ({
  link,
  label,
}) => (
  <a style={{ float: "right" }} href={link}>
    <SecondaryButton>{label}</SecondaryButton>
  </a>
);
