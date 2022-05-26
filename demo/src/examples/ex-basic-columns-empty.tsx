import { Code } from "@blueprintjs/core";
import { Column, ColumnType, Datagrid } from "../../../build";
import { Example } from "../components/example";
import { Variety } from "../data/pepper-varieties/pepper-variety-slice";

export const ExBasicColumnsEmpty = () => {
  return (
    <Example id="ex-no-data" title="No Data">
      <p>When no data is available, a placeholder is rendered.</p>
      <Datagrid dataSource={[] as Variety[]}>
        <Column field="name" label="Name" />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
      </Datagrid>
      <p className="new-section">
        The text can be customized with <Code>notDataText</Code>.
      </p>
      <Datagrid dataSource={[] as Variety[]} notDataText="These are not the droids you are looking for.">
        <Column field="name" label="Name" />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
      </Datagrid>
    </Example>
  );
};
