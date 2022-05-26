import { Column, ColumnType, Datagrid } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";

export const ExBasicColumns = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Example id="basic-columns" title="Basic Columns" description="Text, number and boolean columns.">
      <Datagrid dataSource={varieties}>
        <Column field="name" label="Name" />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
      </Datagrid>
    </Example>
  );
};
