import { Code, Intent, Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Action, Column, ColumnType, Datagrid, Pager } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { CodeBlock } from "../components/code-block";
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

const usageExampleCode = `<Datagrid dataSource={varieties}>
  <Column field="name" label="Name" />
  <Column field="shuUpperBound" label="Heat (SHU)" type={ColumnType.NUMBER} />
  <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
  <Pager elementsPerPage={5} />
</Datagrid>`;

export const HomePage = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Page title="Documentation">
      <Section>
        <p>
          Welcome to the <strong>Blueprint Datagrid</strong> documentation! <strong>Blueprint Datagrid</strong> is an enhanced table component for{" "}
          <a href="https://blueprintjs.com/" target="_blank" rel="noreferrer">
            Blueprint 5
          </a>
          . It adds features like paging, sorting and filtering to basic Blueprint tables. <strong>Blueprint Datagrid</strong> is built with Blueprint components and styling and
          stays faithful to the look-and-feel of the library in both dark and light mode. It supports and is written in Typescript.
        </p>
      </Section>
      <Section title="Example">
        <p>
          The following example shows most of the current features, like <strong>paging</strong>, <strong>sorting</strong>, <strong>filtering</strong>,{" "}
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
      <Section title="Dependencies">
        <p>
          <strong>Blueprint Datagrid</strong> depends on the following <a href="https://blueprintjs.com/">Blueprint 5</a> packages:
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/@blueprintjs/core">@blueprintjs/core</a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@blueprintjs/icons">@blueprintjs/icons</a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@blueprintjs/select">@blueprintjs/select</a>
            </li>
          </ul>
          The exact versions of these packages can be found in the project's <a href="https://github.com/alex-c/blueprint-datagrid/blob/main/package.json">package.json</a>.
        </p>
      </Section>
      <Section title="Installation">
        <p>
          Install <strong>Blueprint Datagrid</strong> with <Code>npm</Code> (or the package manager of your choice):
          <br />
          <CodeBlock code="npm install @alex-c/blueprint-datagrid" />
        </p>
      </Section>
      <Section title="Usage">
        <p>
          A <strong>Blueprint Datagrid</strong> is created with the <Code>Datagrid</Code> component and by passing it an array of objects as <Code>dataSource</Code>, which contain
          the data to use as the contents of the table. The <Code>Datagrid</Code> is mainy configured by passing additional components to it's slot, like <Code>Column</Code>{" "}
          components or the <Code>Pager</Code>:
        </p>
        <Example code={usageExampleCode} showCode>
          <Datagrid dataSource={varieties}>
            <Column field="name" label="Name" />
            <Column field="shuUpperBound" label="Heat (SHU)" type={ColumnType.NUMBER} />
            <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
            <Pager elementsPerPage={5} />
          </Datagrid>
        </Example>
      </Section>
    </Page>
  );
};
