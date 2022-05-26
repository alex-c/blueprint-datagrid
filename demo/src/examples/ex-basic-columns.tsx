import { Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";

export const ExBasicColumns = () => {
  const { users } = useAppSelector(state => state.users);
  return (
    <Example title="Basic Columns" description="Text, number and boolean columns with sorting and paging.">
      <Datagrid dataSource={users}>
        <Column field="id" label="ID" />
        <Column field="name" label="Name" sortable />
        <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
        <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
        <Pager elementsPerPage={10} />
      </Datagrid>
    </Example>
  );
};
