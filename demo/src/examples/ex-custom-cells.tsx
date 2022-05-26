import { Code, Icon, Intent, Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";
import { User } from "../data/users/user-slice";

const format = new Intl.NumberFormat("en-US");
const formatNumber = (n: number) => format.format(n);

const formatSpecies = (s: string) => <Tag>{s.replace("C.", "Capsicum")}</Tag>;

const userRenderer = (u: User) => (
  <>
    <Icon icon={IconNames.Person} /> <Tag intent={Intent.PRIMARY}>{u.name}</Tag> <Code>{u.id}</Code> (Age: {u.age})
  </>
);

export const ExCellCustomization = () => {
  const { varieties } = useAppSelector(state => state.varieties);
  const { users } = useAppSelector(state => state.users);

  return (
    <Example id="ex-cell-customization" title="Cell Customization">
      <p>
        The rendering of a cell can be customized by providing a <Code>formatter</Code> function, which takes the cell
        value as a parameter.
      </p>
      <Datagrid dataSource={varieties}>
        <Column field="name" label="Name" />
        <Column field="species" label="Species" formatter={formatSpecies} />
        <Column
          field="shuLowerBound"
          label="Heat Lower Bound (SHU)"
          type={ColumnType.NUMBER}
          formatter={formatNumber}
          sortable
        />
        <Column
          field="shuUpperBound"
          label="Heat Upper Bound (SHU)"
          type={ColumnType.NUMBER}
          formatter={formatNumber}
          sortable
        />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
      </Datagrid>
      <p className="new-section">
        Alternatively, a <Code>renderer</Code> function can be provided. Unlike the <Code>formatter</Code> function, it
        takes the whole row as a parameter, thus allowing to combine data from more than one object field to a single
        cell value. Note that by binding this custom rendered column to the <Code>name</Code> field, sorting by name
        still works.
      </p>
      <Datagrid dataSource={users}>
        <Column field="name" label="User" sortable renderer={userRenderer} />
        <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
        <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
        <Pager elementsPerPage={10} />
      </Datagrid>
    </Example>
  );
};
