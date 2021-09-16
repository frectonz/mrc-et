import Head from "next/head";

interface SeoProps {
  title?: string;
}

export default function Seo({
  title = "MRC-ET Advanced Molecular Diagnostics",
}: SeoProps) {
  return (
    <Head>
      <title>{title} - MRC-ET</title>
    </Head>
  );
}
