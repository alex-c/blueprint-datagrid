import { Code } from "@blueprintjs/core";
import { Column, ColumnType, Datagrid } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Page } from "../components/page";
import { Section } from "../components/section";

export const FilteringPage = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Page title="Filtering">
      <Section>
        <p>
          When at least one column has filtering activated through <Code>Column.filter</Code>, a filter row appears in the table header. For filtering to works, the column needs a{" "}
          <Code>ColumnType</Code> to be set.
        </p>
      </Section>
      <Section title="Text Filtering">
        <p>
          For <Code>ColumnType.TEXT</Code> fields, a text input is rendered with 4 possible filtering modes.
        </p>
        <Datagrid dataSource={varieties}>
          <Column field="name" label="Name" type={ColumnType.TEXT} filter />
          <Column field="species" label="Species" type={ColumnType.TEXT} filter />
          <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
        </Datagrid>
      </Section>
      <Section title="Numeric Filtering">
        <p className="new-section">
          For <Code>ColumnType.NUMBER</Code> fields, a number input is rendered with 6 possible filtering modes.
        </p>
        <Datagrid dataSource={varieties}>
          <Column field="name" label="Name" type={ColumnType.TEXT} />
          <Column field="species" label="Species" type={ColumnType.TEXT} />
          <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} filter />
          <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} filter />
          <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
        </Datagrid>
      </Section>
      <Section title="Boolean Filtering">
        <p className="new-section">
          For <Code>ColumnType.BOOLEAN</Code> fields, a dropdown is rendered.
        </p>
        <Datagrid dataSource={varieties}>
          <Column field="name" label="Name" type={ColumnType.TEXT} />
          <Column field="species" label="Species" type={ColumnType.TEXT} />
          <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} filter />
        </Datagrid>
      </Section>
    </Page>
  );
};
