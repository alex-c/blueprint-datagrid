import { Code } from "@blueprintjs/core";
import { Column, ColumnType, Datagrid } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";

const createArena = (name: string, address: string) => {
  return {
    name,
    address,
    toString: () => {
      return `${name} (${address})`;
    },
  };
};

const data = [
  {
    name: "Detroit Red Wings",
    arena: {
      name: "Little Ceasars Arena",
      address: "2645 Woodward Ave, Detroit, MI 48201, United States",
    },
  },
];

const data2 = [
  {
    name: "Detroit Red Wings",
    arena: createArena("Little Ceasars Arena", "2645 Woodward Ave, Detroit, MI 48201, United States"),
  },
];

export const ExBasicColumns = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Example
      id="ex-basic-columns"
      title="Basic Columns"
      description="Supported basic column types are text, number and boolean columns. If no specific type is set, the column will be handled like a text column."
    >
      <Datagrid dataSource={varieties}>
        <Column field="name" label="Name" />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
      </Datagrid>
      <p className="new-section">
        If a field contains an object, <Code>toString</Code> is called. The default <Code>toString</Code> will output{" "}
        <Code>[object Object]</Code>:
      </p>
      <Datagrid dataSource={data}>
        <Column field="name" label="Team Name" />
        <Column field="arena" label="Arena" />
      </Datagrid>
      <p className="new-section">
        With a custom <Code>toString</Code> method, the output can be customized:
      </p>
      <Datagrid dataSource={data2}>
        <Column field="name" label="Team Name" />
        <Column field="arena" label="Arena" />
      </Datagrid>
      <p className="new-section">
        For more options for customizting cell rendering, see <a href="#ex-cell-customization">Cell Customization</a>.
      </p>
    </Example>
  );
};
