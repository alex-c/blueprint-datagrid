import { Alignment, Code, Intent, Tag } from "@blueprintjs/core";
import { Column, ColumnType, Datagrid, Pager, Toolbar, ToolbarPosition } from "../../../build";
import { Page } from "../components/page";
import { Section } from "../components/section";
import { Variety } from "../data/pepper-varieties/pepper-varieties";
import { Example } from "../components/example";
import { useAppSelector } from "../app/hooks";
import React from "react";
import { Link } from "react-router-dom";

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

const pagerPositioningExampleCode = `<Datagrid dataSource={varieties}>
  <Column field="name" label="Name" />
  <Column field="shuUpperBound" label="Heat (SHU)" type={ColumnType.NUMBER} />
  <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
  <Toolbar position={ToolbarPosition.BOTTOM}>
    <Pager elementsPerPage={5} align={Alignment.CENTER} />
  </Toolbar>
</Datagrid>`;

const DemoBox = (props: { position: ToolbarPosition, align: Alignment }) => {
  return (
    <Tag intent={Intent.PRIMARY}>{props.position} {props.align}</Tag>
  );
};

export const ToolbarsPage = () => {
  const { varieties } = useAppSelector(state => state.varieties);

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
      <Section title="Toolbar Components">
        <p>Three types of components can be placed inside toolbars:
          <ul>
            <li>Special <strong>Blueprint Datagrid</strong> controls</li>
            <li>Table-level actions</li>
            <li>Any custom component</li>
          </ul>
        </p>
        <p>Some <strong>Blueprint Datagrid</strong> controls can be placed in any of the toolbars with any alignment in
          order to activate a feature. The <Code>Pager</Code> component, for example, activates pagination (see <Link to={"/pagination"}>Pagination</Link> for more information):</p>
        <Example code={pagerPositioningExampleCode}>
          <Datagrid dataSource={varieties}>
            <Column field="name" label="Name" />
            <Column field="shuUpperBound" label="Heat (SHU)" type={ColumnType.NUMBER} />
            <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
            <Toolbar position={ToolbarPosition.BOTTOM}>
              <Pager elementsPerPage={5} align={Alignment.CENTER} />
            </Toolbar>
          </Datagrid>
        </Example>
        <p>For table-level actions, check out the <Link to={"/pagination"}>Actions</Link> chapter.</p>
        <p>Finally, any custom component can be passed to a toolbar, provided that it has an <Code>align</Code> prop of type <Code>Alignment</Code>. See the first example on this page for an example!</p>
      </Section>
    </Page>
  )
    ;
};
