import { H2 } from "@blueprintjs/core";

interface PageProps {
  title: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
}

export const Page = (props: PageProps) => {
  return (
    <div className="page">
      {props.title && <H2>{props.title}</H2>}
      {props.description && <p>{props.description}</p>}
      {props.children}
    </div>
  );
};
