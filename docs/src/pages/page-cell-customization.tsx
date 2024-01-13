import { Alignment, Code, Icon, Intent, Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Column, ColumnType, Datagrid, Pager, Toolbar, ToolbarPosition } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";
import { Page } from "../components/page";
import { Section } from "../components/section";
import { User } from "../data/users/user-slice";

const formatCode = `const format = new Intl.NumberFormat("en-US");
const formatNumber = (n: number) => format.format(n);

const formatSpecies = (s: string) => <Tag>{s.replace("C.", "Capsicum")}</Tag>;

<Datagrid dataSource={varieties}>
  <Column field="name" label="Name" />
  <Column field="species" label="Species" formatter={formatSpecies} />
  <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} formatter={formatNumber} sortable />
  <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} formatter={formatNumber} sortable />
  <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
</Datagrid>`;

const renderCode = `const renderUser = (u: User) => (
  <>
    <Icon icon={IconNames.Person} /> <Tag intent={Intent.PRIMARY}>{u.name}</Tag> <Code>{u.id}</Code> (Age: {u.age})
  </>
);

<Datagrid dataSource={users}>
  <Column field="name" label="User" sortable renderer={renderUser} />
  <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
  <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
  <Toolbar position={ToolbarPosition.BOTTOM}>
    <Pager elementsPerPage={10} align={Alignment.RIGHT} />
  </Toolbar>
</Datagrid>`;

const formatBooleanCode = `const formatBoolean = (value: boolean) => value ? "okay dokay :)" : "not okay :(";

<Datagrid dataSource={users}>
  <Column field="id" label="ID" />
  <Column field="name" label="User" />
  <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} filterable sortable formatter={formatBoolean} />
  <Toolbar position={ToolbarPosition.BOTTOM}>
    <Pager elementsPerPage={5} align={Alignment.RIGHT} />
  </Toolbar>
</Datagrid>
`;

const format = new Intl.NumberFormat("en-US");
const formatNumber = (n: number) => format.format(n);

const formatSpecies = (s: string) => <Tag>{s.replace("C.", "Capsicum")}</Tag>;

const renderUser = (u: User) => (
  <>
    <Icon icon={IconNames.Person} /> <Tag intent={Intent.PRIMARY}>{u.name}</Tag> <Code>{u.id}</Code> (Age: {u.age})
  </>
);

const formatBoolean = (value: boolean) => value ? "okay dokay :)" : "not okay :(";

export const CellCustomizationPage = () => {
  const { varieties } = useAppSelector(state => state.varieties);
  const { users } = useAppSelector(state => state.users);

  return (
    <Page title="Cell Customization">
      <Section>
        <p>There are two ways to customize how data cells are rendered.</p>
      </Section>
      <Section title="Value Formatting">
        <p>
          The rendering of a cell can be customized by providing a <Code>formatter</Code> function, which takes the cell
          value as a parameter.
        </p>
        <Example code={formatCode}>
          <Datagrid dataSource={varieties}>
            <Column field="name" label="Name" />
            <Column field="species" label="Species" formatter={formatSpecies} />
            <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER}
                    formatter={formatNumber} sortable />
            <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER}
                    formatter={formatNumber} sortable />
            <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
          </Datagrid>
        </Example>
      </Section>
      <Section title="Custom Rendering">
        <p className="new-section">
          Alternatively, a <Code>renderer</Code> function can be provided. Unlike the <Code>formatter</Code> function,
          it takes the whole row as a parameter, thus allowing to
          combine data from more than one object field to a single cell value. Note that by binding this custom rendered
          column to the <Code>name</Code> field, sorting by name
          still works.
        </p>
        <Example code={renderCode}>
          <Datagrid dataSource={users}>
            <Column field="name" label="User" sortable renderer={renderUser} />
            <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
            <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} />
            <Toolbar position={ToolbarPosition.BOTTOM}>
              <Pager elementsPerPage={10} align={Alignment.RIGHT} />
            </Toolbar>
          </Datagrid>
        </Example>
      </Section>
      <Section title="Precedence">
        <p>A <Code>renderer</Code> takes precedence over a <Code>formatter</Code>, so if both have been specified, only
          the <Code>renderer</Code> is applied. Both the <Code>renderer</Code> and the <Code>formatter</Code> take
          precedence over any formatting that the Datagrid would otherwise apply. For example, the way a boolean column
          is rendered can be changed:</p>
        <Example code={formatBooleanCode}>
          <Datagrid dataSource={users}>
            <Column field="id" label="ID" />
            <Column field="name" label="User" />
            <Column field="enabled" label="Enabled" type={ColumnType.BOOLEAN} filterable sortable
                    formatter={formatBoolean} />
            <Toolbar position={ToolbarPosition.BOTTOM}>
              <Pager elementsPerPage={5} align={Alignment.RIGHT} />
            </Toolbar>
          </Datagrid>
        </Example>
      </Section>
    </Page>
  );
};
