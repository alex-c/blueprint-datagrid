import { Code } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { Column, ColumnType, Datagrid } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";
import { Page } from "../components/page";
import { Section } from "../components/section";

const columnDefinitionCode = `<Datagrid dataSource={[{id: "test-id", name: "Test Name"}]}>
  <Column field="id" label="ID" />
  <Column field="name" label="Name" />
</Datagrid>`;

const basicColumTypeCode = `<Datagrid dataSource={varieties}>
  <Column field="name" label="Name" />
  <Column field="shuUpperBound" label="Heat (SHU)" type={ColumnType.NUMBER} />
  <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
</Datagrid>`;

const arenaData = [
  {
    name: "Detroit Red Wings",
    arena: {
      name: "Little Ceasars Arena",
      address: "2645 Woodward Ave, Detroit, Michigan, United States",
    },
  },
  {
    name: "Colorado Avalanche",
    arena: {
      name: "Ball Arena",
      address: "1000 Chopper Circle, Denver, Colorado, United States",
    },
  },
];

const fixedArenaData = arenaData.map(team => {
  return {
    name: team.name,
    arena: {
      name: team.arena.name,
      address: team.arena.address,
      toString: () => `${team.arena.name} (${team.arena.address})`,
    },
  };
});

export const DefiningColumnPage = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Page title="Defining Columns">
      <Section>
        <p>
          Columns are defined by adding <Code>Column</Code> components to a <Code>Datagrid</Code> component. Each column requires at least a <Code>field</Code>, which has to match
          a field name in the data source objects, and a <Code>label</Code>:
        </p>
        <Example code={columnDefinitionCode} showCode>
          <Datagrid dataSource={[{ id: "test-id", name: "Test Name" }]}>
            <Column field="id" label="ID" />
            <Column field="name" label="Name" />
          </Datagrid>
        </Example>
      </Section>
      <Section title="Basic Column Types">
        <p>
          It is possible to add a column type to any given column by setting the <Code>type</Code> field to one of the values of the <Code>ColumnType</Code> enum.
          <Code>ColumnType.TEXT</Code> can be omitted, as it is the default. Other possible values are <Code>ColumnType.NUMBER</Code> and <Code>ColumnType.BOOLEAN</Code>. This
          information is used for rendering and other features like sorting and filtering. Note the different rendering style of different column types:
        </p>
        <Example code={basicColumTypeCode}>
          <Datagrid dataSource={varieties}>
            <Column field="name" label="Name" />
            <Column field="shuUpperBound" label="Heat (SHU)" type={ColumnType.NUMBER} />
            <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
          </Datagrid>
        </Example>
      </Section>
      <Section title="Object Columns">
        <p>
          If a field contains an object, <Code>toString</Code> is called. The default <Code>toString</Code> will output <Code>[object Object]</Code>:
        </p>
        <Datagrid dataSource={arenaData}>
          <Column field="name" label="Team Name" />
          <Column field="arena" label="Arena" />
        </Datagrid>
        <p className="new-section">
          With a custom <Code>toString</Code> method, the output can be customized:
        </p>
        <Datagrid dataSource={fixedArenaData}>
          <Column field="name" label="Team Name" />
          <Column field="arena" label="Arena" />
        </Datagrid>
        <p>
          For more options for customizting cell rendering, see <Link to={"/cell-customization"}>Cell Customization</Link>.
        </p>
      </Section>
    </Page>
  );
};
