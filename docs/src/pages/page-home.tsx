import { Callout, Intent, Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Action, Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";
import { Page } from "../components/page";
import { Section } from "../components/section";
import { Variety } from "../data/pepper-varieties/pepper-varieties";

const formatSpecies = (s: string) => <Tag>{s.replace("C.", "Capsicum")}</Tag>;
const editVarietyAction = (_: any, variety: Variety) => alert(`Editing ${variety.name}...`);
const deleteVarietyAction = (_: any, variety: Variety) => alert(`Deleting ${variety.name}...`);

const combinedExampleCode = `<Datagrid dataSource={varieties}>
  <Column field="name" label="Name" type={ColumnType.TEXT} filter sortable />
  <Column field="species" label="Species" type={ColumnType.TEXT} filter sortable formatter={formatSpecies} />
  <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} filter sortable />
  <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} filter sortable />
  <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} filter sortable />
  <Action icon={IconNames.EDIT} intent={Intent.PRIMARY} onClick={editVarietyAction} />
  <Action icon={IconNames.TRASH} intent={Intent.DANGER} onClick={deleteVarietyAction} />
  <Pager elementsPerPage={5} />
</Datagrid>`;

export const HomePage = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Page title="Documentation">
      <p>
        Welcome to the Blueprint Datagrid documentation! Blueprint Datagrid is an enhanced table component for{" "}
        <a href="https://blueprintjs.com/" target="_blank" rel="noreferrer">
          Blueprint 4
        </a>
        . It adds features like paging, sorting and filtering to basic Blueprint tables. Blueprint Datagrid is built with Blueprint components and styling and stays faithful to the
        look-and-feel of the library in both dark and light mode. It supports and is written in Typescript.
      </p>
      <Section title="Example">
        <p>
          The following example shows most of the current features, like <strong>paging</strong>, <strong>sorting</strong> and <strong>filtering</strong>,{" "}
          <strong>row-level actions</strong> and <strong>custom cell formatting</strong>:
        </p>
        <Example code={combinedExampleCode}>
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
        </Example>
      </Section>
      <Section title="Getting Started">
        <Callout icon={IconNames.WRENCH} intent={Intent.WARNING}>
          This section is work in progress!
        </Callout>
      </Section>
    </Page>
  );
};
