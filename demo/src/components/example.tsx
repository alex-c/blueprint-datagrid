import { H2 } from "@blueprintjs/core";

interface ExampleProps {
  title?: string;
  description?: string;
  children: JSX.Element;
}

export const Example = (props: ExampleProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {props.title && <H2>{props.title}</H2>}
      {props.description && <p>{props.description}</p>}
      {props.children}
    </div>
  );
};
