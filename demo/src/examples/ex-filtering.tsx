import { Code } from "@blueprintjs/core";
import { Column, ColumnType, Datagrid } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";

export const ExFiltering = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Example id="ex-filtering" title="Filtering">
      <p>
        When at least one column has filtering activated through <Code>Column.filter</Code>, a filter row appears in the
        table header. For filtering to works, the column needs a <Code>ColumnType</Code> to be set.
      </p>
      <p>
        For <Code>ColumnType.TEXT</Code> fields, a text input is rendered with two possible fitlering modes:{" "}
        <Code>contains</Code> and <Code>equals</Code>.
      </p>
      <Datagrid dataSource={varieties}>
        <Column field="name" label="Name" type={ColumnType.TEXT} filter />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
      </Datagrid>
    </Example>
  );
};
