import { Code, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Action, Column, ColumnType, Datagrid } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";
import { Variety } from "../data/pepper-varieties/pepper-varieties";

const viewVarietyAction = (_: any, variety: Variety) => alert(`Viewing ${variety.name}...`);
const editVarietyAction = (_: any, variety: Variety) => alert(`Editing ${variety.name}...`);
const deleteVarietyAction = (_: any, variety: Variety) => alert(`Deleting ${variety.name}...`);

export const ExActions = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Example id="ex-actions" title="Actions">
      <p>
        Actions can be added with an icon, text or both and optionally with an <Code>Intent</Code>.
      </p>
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
      <p className="new-section">The no data placeholder takes into account the additional column.</p>
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
    </Example>
  );
};
