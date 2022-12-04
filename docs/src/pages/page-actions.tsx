import { Code, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Action, Column, ColumnType, Datagrid } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";
import { Page } from "../components/page";
import { Section } from "../components/section";
import { Variety } from "../data/pepper-varieties/pepper-varieties";

const rowLevelActionCode = `const viewVarietyAction = (_: any, variety: Variety) => alert(\`Viewing \${variety.name}...\`);
const editVarietyAction = (_: any, variety: Variety) => alert(\`Editing \${variety.name}...\`);
const deleteVarietyAction = (_: any, variety: Variety) => alert(\`Deleting \${variety.name}...\`);

<Datagrid dataSource={varieties}>
  <Column field="name" label="Name" />
  <Column field="species" label="Species" />
  <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
  <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
  <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
  <Action icon={IconNames.EyeOpen} onClick={viewVarietyAction} />
  <Action icon={IconNames.Edit} text="Edit" intent={Intent.PRIMARY} onClick={editVarietyAction} />
  <Action text="Delete" intent={Intent.DANGER} onClick={deleteVarietyAction} />
</Datagrid>
`;

const viewVarietyAction = (_: any, variety: Variety) => alert(`Viewing ${variety.name}...`);
const editVarietyAction = (_: any, variety: Variety) => alert(`Editing ${variety.name}...`);
const deleteVarietyAction = (_: any, variety: Variety) => alert(`Deleting ${variety.name}...`);

export const ActionsPage = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Page title="Actions">
      <Section>
        <p>
          Actions allow to wire callbacks to different buttons on the <Code>Datagrid</Code> and to handle data through them. Actions can have an icon, text or both and optionally
          have an <Code>Intent</Code>.
        </p>
      </Section>
      <Section title="Row-Level Actions">
        <p>
          Row-level actions can be added by providing one or more <Code>Action</Code> components. A row-level action is a callback that will be called with the corresponding row of
          data as a parameter. The callback takes the React event (eg. click event) that triggered it as first parameter, and the object corresponding to the data row as second
          parameter.
        </p>
        <Example code={rowLevelActionCode}>
          <Datagrid dataSource={varieties}>
            <Column field="name" label="Name" />
            <Column field="species" label="Species" />
            <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
            <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
            <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
            <Action icon={IconNames.EyeOpen} onClick={viewVarietyAction} />
            <Action icon={IconNames.Edit} text="Edit" intent={Intent.PRIMARY} onClick={editVarietyAction} />
            <Action text="Delete" intent={Intent.DANGER} onClick={deleteVarietyAction} />
          </Datagrid>
        </Example>
      </Section>
      <Section>
        <p>When there is no data to display, the placeholder takes into account the additional column.</p>
        <Datagrid dataSource={[] as Variety[]}>
          <Column field="name" label="Name" />
          <Column field="species" label="Species" />
          <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
          <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
          <Action icon={IconNames.EyeOpen} onClick={viewVarietyAction} />
          <Action icon={IconNames.Edit} text="Edit" intent={Intent.PRIMARY} onClick={editVarietyAction} />
          <Action text="Delete" intent={Intent.DANGER} onClick={deleteVarietyAction} />
        </Datagrid>
      </Section>
    </Page>
  );
};
