import { H2 } from "@blueprintjs/core";

interface ExampleProps {
  id: string;
  title?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
}

export const Example = (props: ExampleProps) => {
  return (
    <div id={props.id} style={{ paddingBottom: "10px", marginBottom: "20px" }}>
      {props.title && <H2>{props.title}</H2>}
      {props.description && <p>{props.description}</p>}
      {props.children}
    </div>
  );
};
