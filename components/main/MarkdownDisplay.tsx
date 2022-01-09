// MDX
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// MDX Components
import { components } from "../utils/components";

interface MarkdownDisplayProps {
  content: MDXRemoteSerializeResult;
}

export default function MarkdownDisplay({ content }: MarkdownDisplayProps) {
  return <MDXRemote {...content} components={components} />;
}
