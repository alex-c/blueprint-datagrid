import { Alignment, Code, Intent, Tag } from "@blueprintjs/core";
import { Column, ColumnType, Datagrid, Pager, Toolbar, ToolbarPosition } from "../../../build";
import { Page } from "../components/page";
import { Section } from "../components/section";
import { Variety } from "../data/pepper-varieties/pepper-varieties";
import { Example } from "../components/example";

const positioningDemoCode = `<Datagrid dataSource={[] as Variety[]}>
  <Toolbar position={ToolbarPosition.TOP}>
    <DemoBox position={ToolbarPosition.TOP} align={Alignment.LEFT} />
    <DemoBox position={ToolbarPosition.TOP} align={Alignment.CENTER} />
    <DemoBox position={ToolbarPosition.TOP} align={Alignment.RIGHT} />
  </Toolbar>
  <Column field="name" label="Name" />
  <Column field="species" label="Species" />
  <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
  <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
  <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
  <Toolbar position={ToolbarPosition.BOTTOM}>
    <DemoBox position={ToolbarPosition.BOTTOM} align={Alignment.LEFT} />
    <DemoBox position={ToolbarPosition.BOTTOM} align={Alignment.CENTER} />
    <DemoBox position={ToolbarPosition.BOTTOM} align={Alignment.RIGHT} />
  </Toolbar>
</Datagrid>`;

const DemoBox = (props: { position: ToolbarPosition, align: Alignment }) => {
  return (
    <Tag intent={Intent.PRIMARY}>{props.position} {props.align}</Tag>
  );
};

export const ToolbarsPage = () => {
  return (
    <Page title="Toolbars">
      <Section>
        <p>A Datagrid can have toolbars on the top and/or bottom, defined by using the <Code>Toolbar</Code> component
          and specifying a <Code>ToolbarPosition</Code>. Inside a toolbar, elements can be aligned left, center or right
          using Blueprint Core's <Code>Alignment</Code>.</p>
        <Example code={positioningDemoCode}>
          <Datagrid dataSource={[] as Variety[]}>
            <Toolbar position={ToolbarPosition.TOP}>
              <DemoBox position={ToolbarPosition.TOP} align={Alignment.LEFT} />
              <DemoBox position={ToolbarPosition.TOP} align={Alignment.CENTER} />
              <DemoBox position={ToolbarPosition.TOP} align={Alignment.RIGHT} />
            </Toolbar>
            <Column field="name" label="Name" />
            <Column field="species" label="Species" />
            <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
            <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
            <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
            <Toolbar position={ToolbarPosition.BOTTOM}>
              <DemoBox position={ToolbarPosition.BOTTOM} align={Alignment.LEFT} />
              <DemoBox position={ToolbarPosition.BOTTOM} align={Alignment.CENTER} />
              <DemoBox position={ToolbarPosition.BOTTOM} align={Alignment.RIGHT} />
            </Toolbar>
          </Datagrid>
        </Example>
      </Section>
    </Page>
  );
};
