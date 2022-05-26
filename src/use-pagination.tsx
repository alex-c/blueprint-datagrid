import React from "react";
import { Button, ButtonGroup, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useState } from "react";
import { DataSourceType } from "./datagrid";

const calculateNumberOfPages = (numberOfElements: number, elementsPerPage: number) => {
  const ratio = numberOfElements / elementsPerPage;
  const floored = Math.floor(ratio);
  return ratio > floored ? floored + 1 : floored === 0 ? 1 : floored;
};

export const usePagination = <T extends DataSourceType>(
  numberOfElements: number,
  elementsPerPage: number | undefined
) => {
  const [activePage, setActivePage] = useState<number>(1);
  const numberOfPages = elementsPerPage !== undefined ? calculateNumberOfPages(numberOfElements, elementsPerPage) : 1;

  const getButtonIntent = (pageNumber: number) => (pageNumber === activePage ? Intent.PRIMARY : Intent.NONE);

  const renderPaginationControls = () => {
    return (
      <ButtonGroup>
        <Button icon={IconNames.DoubleChevronLeft} disabled={activePage === 1} onClick={() => setActivePage(1)} />
        <Button
          icon={IconNames.ChevronLeft}
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        />
        {[...Array(numberOfPages)].map((_, i) => (
          <Button
            key={"button-" + i}
            text={i + 1}
            intent={getButtonIntent(i + 1)}
            onClick={() => setActivePage(i + 1)}
          />
        ))}
        <Button
          icon={IconNames.ChevronRight}
          disabled={activePage === numberOfPages}
          onClick={() => setActivePage(activePage + 1)}
        />
        <Button
          icon={IconNames.DoubleChevronRight}
          disabled={activePage === numberOfPages}
          onClick={() => setActivePage(numberOfPages)}
        />
      </ButtonGroup>
    );
  };

  const paginateData = (data: T[]) => {
    if (elementsPerPage) {
      return data.slice((activePage - 1) * elementsPerPage, (activePage - 1) * elementsPerPage + elementsPerPage);
    }
    return data;
  };

  return { paginateData, renderPaginationControls };
};
