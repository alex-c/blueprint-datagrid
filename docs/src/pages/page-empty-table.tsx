import { Code } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Column, ColumnType, Datagrid, Placeholder } from "../../../build";
import { Example } from "../components/example";
import { Page } from "../components/page";
import { Section } from "../components/section";
import { Variety } from "../data/pepper-varieties/pepper-varieties";

const placeholderCode = `<Datagrid dataSource={[] as Variety[]}>
  <Placeholder text="These are not the droids you are looking for." icon={IconNames.Cross} />
  <Column field="name" label="Name" />
  <Column field="species" label="Species" />
  <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
  <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
  <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
</Datagrid>`;

export const EmptyTablePage = () => {
  return (
    <Page title="Empty Table">
      <Section>
        <p>When no data is available, a placeholder is rendered:</p>
        <Datagrid dataSource={[] as Variety[]}>
          <Column field="name" label="Name" />
          <Column field="species" label="Species" />
          <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
        </Datagrid>
      </Section>
      <Section>
        <p>
          The text and/or icon can be customized by providing a <Code>Placeholder</Code> component:
        </p>
        <Example code={placeholderCode}>
          <Datagrid dataSource={[] as Variety[]}>
            <Placeholder text="These are not the droids you are looking for." icon={IconNames.Cross} />
            <Column field="name" label="Name" />
            <Column field="species" label="Species" />
            <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
            <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
            <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
          </Datagrid>
        </Example>
      </Section>
    </Page>
  );
};
