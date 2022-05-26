import { Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";

export const ExSorting = () => {
  const { users } = useAppSelector(state => state.users);

  return (
    <Example id="ex-sorting" title="Sorting" description="Basic sorting works on text, number and boolean columns.">
      <Datagrid dataSource={users}>
        <Column field="id" label="ID" />
        <Column field="name" label="Name" sortable />
        <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
        <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} sortable />
        <Pager elementsPerPage={10} />
      </Datagrid>
    </Example>
  );
};
