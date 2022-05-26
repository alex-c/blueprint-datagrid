import { Code } from "@blueprintjs/core";
import { Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";
import { Variety } from "../data/pepper-varieties/pepper-variety-slice";
import { User } from "../data/users/user-slice";

export const ExPaging = () => {
  const { users } = useAppSelector(state => state.users);
  const { varieties } = useAppSelector(state => state.varieties);

  let manyUsers: User[] = [];
  for (let i = 0; i < 100; i++) {
    manyUsers = manyUsers.concat(users);
  }

  return (
    <Example id="ex-paging" title="Paging">
      <p>
        Paging is activated by adding a <Code>Pager</Code> component and setting the mandatory{" "}
        <Code>Pager.elementsPerPage</Code> property.
      </p>
      <Datagrid dataSource={users}>
        <Column field="id" label="ID" />
        <Column field="name" label="Name" />
        <Column field="age" label="Age" type={ColumnType.NUMBER} />
        <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
        <Pager elementsPerPage={10} />
      </Datagrid>
      <p className="new-section">
        A table with paging will always display the same number of rows, filling up the last page with blank rows if
        needed. In the following example, <Code>Pager.elementsPerPage</Code> is set to <Code>5</Code>.
      </p>
      <Datagrid dataSource={varieties}>
        <Column field="name" label="Name" />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
        <Pager elementsPerPage={5} />
      </Datagrid>
      <p className="new-section">
        The no data case is handled by displaying just one page in the <Code>Pager</Code>.
      </p>
      <Datagrid dataSource={[] as Variety[]}>
        <Column field="name" label="Name" />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
        <Pager elementsPerPage={5} />
      </Datagrid>
      <p className="new-section">With many pages, the pager hides some of the buttons.</p>
      <Datagrid dataSource={manyUsers}>
        <Column field="id" label="ID" />
        <Column field="name" label="Name" />
        <Column field="age" label="Age" type={ColumnType.NUMBER} />
        <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
        <Pager elementsPerPage={10} />
      </Datagrid>
    </Example>
  );
};
