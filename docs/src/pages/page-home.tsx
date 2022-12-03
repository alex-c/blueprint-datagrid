import { Intent, Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Action, Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Page } from "../components/page";
import { Section } from "../components/section";
import { Variety } from "../data/pepper-varieties/pepper-varieties";

const formatSpecies = (s: string) => <Tag>{s.replace("C.", "Capsicum")}</Tag>;
const editVarietyAction = (_: any, variety: Variety) => alert(`Editing ${variety.name}...`);
const deleteVarietyAction = (_: any, variety: Variety) => alert(`Deleting ${variety.name}...`);

export const HomePage = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Page title="Documentation" description="Welcome to the Blueprint Datagrid documentation!">
      <Section title="Example">
        <p>The following quick example shows most of the current features, like paging, sorting and filtering:</p>
        <Datagrid dataSource={varieties}>
          <Column field="name" label="Name" type={ColumnType.TEXT} filter sortable />
          <Column field="species" label="Species" type={ColumnType.TEXT} filter sortable formatter={formatSpecies} />
          <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} filter sortable />
          <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} filter sortable />
          <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} filter sortable />
          <Action icon={IconNames.EDIT} intent={Intent.PRIMARY} onClick={editVarietyAction} />
          <Action icon={IconNames.TRASH} intent={Intent.DANGER} onClick={deleteVarietyAction} />
          <Pager elementsPerPage={5} />
        </Datagrid>
      </Section>
    </Page>
  );
};
