import { Button } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Tooltip2 } from "@blueprintjs/popover2";
import { useState } from "react";
import { CodeBlock } from "./code-block";
import "./example.scss";

interface ExampleProps {
  code: string;
  children: JSX.Element | JSX.Element[];
  showCode?: boolean;
}

export const Example = (props: ExampleProps) => {
  const [showCode, setShowCode] = useState(props.showCode || false);

  return (
    <div className="example">
      <div className="example-controls">
        <Tooltip2 content={showCode ? "Show example" : "Show code"}>
          <Button icon={showCode ? IconNames.PANEL_TABLE : IconNames.CODE} onClick={() => setShowCode(!showCode)} />
        </Tooltip2>
      </div>
      {showCode ? <CodeBlock code={props.code} /> : <div className="example-table">{props.children}</div>}
    </div>
  );
};
