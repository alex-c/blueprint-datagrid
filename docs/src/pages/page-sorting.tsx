import { Code } from "@blueprintjs/core";
import { Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";
import { Page } from "../components/page";
import { Section } from "../components/section";

const sortableCode = `<Datagrid dataSource={users}>
  <Column field="id" label="ID" />
  <Column field="name" label="Name" sortable />
  <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
  <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} sortable />
  <Pager elementsPerPage={10} />
</Datagrid>`;

export const SortingPage = () => {
  const { users } = useAppSelector(state => state.users);

  return (
    <Page title="Sorting">
      <p>
        Basic sorting can be activated by setting <Code>Column.sortable</Code>, and works on text, number and boolean columns. Right now, only one column can be sorted at the time.
      </p>
      <Section>
        <Example code={sortableCode}>
          <Datagrid dataSource={users}>
            <Column field="id" label="ID" />
            <Column field="name" label="Name" sortable />
            <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
            <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} sortable />
            <Pager elementsPerPage={10} />
          </Datagrid>
        </Example>
      </Section>
    </Page>
  );
};
