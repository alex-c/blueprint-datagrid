import { useLayoutEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

interface CodeBlockProps {
  code: string;
}

export const CodeBlock = (props: CodeBlockProps) => {
  useLayoutEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-typescript">{props.code}</code>
    </pre>
  );
};
