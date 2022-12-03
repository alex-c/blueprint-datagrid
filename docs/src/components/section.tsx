import { H3 } from "@blueprintjs/core";

interface ExampleProps {
  title?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
}

export const Section = (props: ExampleProps) => {
  return (
    <div className="section">
      {props.title && <H3>{props.title}</H3>}
      {props.description && <p>{props.description}</p>}
      {props.children}
    </div>
  );
};
