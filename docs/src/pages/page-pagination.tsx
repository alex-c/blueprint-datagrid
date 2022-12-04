import { Code } from "@blueprintjs/core";
import { Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";
import { Page } from "../components/page";
import { Section } from "../components/section";
import { Variety } from "../data/pepper-varieties/pepper-varieties";
import { User } from "../data/users/user-slice";

const paginationCode = `<Datagrid dataSource={users}>
  <Column field="id" label="ID" />
  <Column field="name" label="Name" />
  <Column field="age" label="Age" type={ColumnType.NUMBER} />
  <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
  <Pager elementsPerPage={10} />
</Datagrid>`;

const directInputPaginationCode = `<Datagrid dataSource={users}>
  <Column field="id" label="ID" />
  <Column field="name" label="Name" />
  <Column field="age" label="Age" type={ColumnType.NUMBER} />
  <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
  <Pager elementsPerPage={10} directInput />
</Datagrid>`;

export const PaginationPage = () => {
  const { users } = useAppSelector(state => state.users);
  const { varieties } = useAppSelector(state => state.varieties);

  let manyUsers: User[] = [];
  for (let i = 0; i < 100; i++) {
    manyUsers = manyUsers.concat(users);
  }

  return (
    <Page title="Pagination">
      <Section title="Basics">
        <p>
          Pagination is activated by adding a <Code>Pager</Code> component and setting the mandatory <Code>Pager.elementsPerPage</Code> property.
        </p>
        <Example code={paginationCode}>
          <Datagrid dataSource={users}>
            <Column field="id" label="ID" />
            <Column field="name" label="Name" />
            <Column field="age" label="Age" type={ColumnType.NUMBER} />
            <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
            <Pager elementsPerPage={10} />
          </Datagrid>
        </Example>
        <p className="new-section">
          A table with pagination will always display the same number of rows, filling up the last page with blank rows if needed. In the following example,{" "}
          <Code>Pager.elementsPerPage</Code> is set to <Code>5</Code>.
        </p>
        <Datagrid dataSource={varieties}>
          <Column field="name" label="Name" />
          <Column field="species" label="Species" />
          <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
          <Pager elementsPerPage={5} />
        </Datagrid>
      </Section>
      <Section title="Empty Table & Many Pages">
        <p className="new-section">When there is no data to display, the pagination controls just display one page.</p>
        <Datagrid dataSource={[] as Variety[]}>
          <Column field="name" label="Name" />
          <Column field="species" label="Species" />
          <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
          <Pager elementsPerPage={5} />
        </Datagrid>
        <p className="new-section">When there are many pages to display, some of the buttons are hidden in the pagination controls.</p>
        <Datagrid dataSource={manyUsers}>
          <Column field="id" label="ID" />
          <Column field="name" label="Name" />
          <Column field="age" label="Age" type={ColumnType.NUMBER} />
          <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
          <Pager elementsPerPage={10} />
        </Datagrid>
      </Section>
      <Section title="Direct Input Mode">
        <p className="new-section">
          An alternative pagination control mode can be activated with <Code>Pager.directInput</Code>. It allows to directly input the target page number. It doesn't have good
          usability when there are few pages, but can be useful when there are many pages, as it allows to quicky jump to any page instead of clicking many times.
        </p>
        <p>With few pages:</p>
        <Example code={directInputPaginationCode}>
          <Datagrid dataSource={users}>
            <Column field="id" label="ID" />
            <Column field="name" label="Name" />
            <Column field="age" label="Age" type={ColumnType.NUMBER} />
            <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
            <Pager elementsPerPage={10} directInput />
          </Datagrid>
        </Example>
        <p className="new-section">With many pages:</p>
        <Datagrid dataSource={manyUsers}>
          <Column field="id" label="ID" />
          <Column field="name" label="Name" />
          <Column field="age" label="Age" type={ColumnType.NUMBER} />
          <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
          <Pager elementsPerPage={10} directInput />
        </Datagrid>
      </Section>
    </Page>
  );
};
