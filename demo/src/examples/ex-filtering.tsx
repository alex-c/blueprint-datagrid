import { Column, ColumnType, Datagrid } from "../../../build";
import { useAppSelector } from "../app/hooks";
import { Example } from "../components/example";

export const ExFiltering = () => {
  const { varieties } = useAppSelector(state => state.varieties);

  return (
    <Example id="ex-filtering" title="Filtering">
      <Datagrid dataSource={varieties}>
        <Column field="name" label="Name" filter />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
      </Datagrid>
    </Example>
  );
};
