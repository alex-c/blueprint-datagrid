import { Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Page } from "../components/page";
import { Section } from "../components/section";

export const SortingPage = () => {
  const { users } = useAppSelector(state => state.users);

  return (
    <Page title="Sorting">
      <p>Basic sorting works on text, number and boolean columns. Right now, only one column can be sorted at the time.</p>
      <Section>
        <Datagrid dataSource={users}>
          <Column field="id" label="ID" />
          <Column field="name" label="Name" sortable />
          <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
          <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} sortable />
          <Pager elementsPerPage={10} />
        </Datagrid>
      </Section>
    </Page>
  );
};
