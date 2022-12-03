import { Code } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { Column, ColumnType, Datagrid } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Page } from "../components/page";
import { Section } from "../components/section";

const createArenaObject = (name: string, address: string) => {
  return {
    name,
    address,
    toString: () => {
      return `${name} (${address})`;
    },
  };
};

const arenaData = [
  {
    name: "Detroit Red Wings",
    arena: {
      name: "Little Ceasars Arena",
      address: "2645 Woodward Ave, Detroit, MI 48201, United States",
    },
  },
];

const fixedArenaData = [
  {
    name: "Detroit Red Wings",
    arena: createArenaObject("Little Ceasars Arena", "2645 Woodward Ave, Detroit, MI 48201, United States"),
  },
];

export const BasicsPage = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Page title="Basics" description="">
      <Section title="Column Types">
        <p>
          Supported basic column types are text, number and boolean columns, which can be specified witht he <Code>ColumnType</Code> enum. If no specific type is set, the column
          will be handled like a text column.
        </p>
        <Datagrid dataSource={varieties}>
          <Column field="name" label="Name" />
          <Column field="species" label="Species" />
          <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
        </Datagrid>
      </Section>
      <Section title="Object Columns">
        <p>
          If a field contains an object, <Code>toString</Code> is called. The default <Code>toString</Code> will output <Code>[object Object]</Code>:
        </p>
        <Datagrid dataSource={arenaData}>
          <Column field="name" label="Team Name" />
          <Column field="arena" label="Arena" />
        </Datagrid>
        <p className="new-section">
          With a custom <Code>toString</Code> method, the output can be customized:
        </p>
        <Datagrid dataSource={fixedArenaData}>
          <Column field="name" label="Team Name" />
          <Column field="arena" label="Arena" />
        </Datagrid>
        <p>
          For more options for customizting cell rendering, see <Link to={"cell-customization"}>Cell Customization</Link>.
        </p>
      </Section>
    </Page>
  );
};
