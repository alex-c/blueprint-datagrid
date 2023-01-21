import React from "react";
import { Button, ButtonGroup, Intent, NumericInput } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useState } from "react";
import { DataSourceType } from "./datagrid";

const calculateNumberOfPages = (numberOfElements: number, elementsPerPage: number) => {
  const ratio = numberOfElements / elementsPerPage;
  const floored = Math.floor(ratio);
  return ratio > floored ? floored + 1 : floored === 0 ? 1 : floored;
};

export const usePagination = <T extends DataSourceType>(elementsPerPage: number | undefined, directInput: boolean) => {
  const [activePage, setActivePage] = useState<number>(1);

  const renderPaginationControls = (numberOfElements: number) => {
    const numberOfPages = elementsPerPage !== undefined ? calculateNumberOfPages(numberOfElements, elementsPerPage) : 1;

    if (activePage > numberOfPages) {
      setActivePage(1);
    }

    return (
      <ButtonGroup>
        <Button icon={IconNames.DoubleChevronLeft} disabled={activePage === 1} onClick={() => setActivePage(1)} />
        <Button
          icon={IconNames.ChevronLeft}
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        />
        {directInput ? (
          <>
            <NumericInput
              min={1}
              max={numberOfPages}
              value={activePage}
              onValueChange={(page: number) => {
                if (page >= 1 && page <= numberOfPages) {
                  setActivePage(page);
                }
              }}
              style={{ width: numberOfPages.toString().length * 18 + 32 + "px", textAlign: "right" }}
              buttonPosition="none"
              selectAllOnFocus
              selectAllOnIncrement
              rightElement={
                <Button minimal disabled style={{ paddingLeft: "2px" }}>
                  / {numberOfPages}
                </Button>
              }
            />
          </>
        ) : (
          <>
            {activePage > 3 ? (
              <>
                <Button text={".."} disabled />
                <Button text={activePage - 2} onClick={() => setActivePage(activePage - 2)} />
                <Button text={activePage - 1} onClick={() => setActivePage(activePage - 1)} />
              </>
            ) : (
              [...Array(activePage - 1 >= 0 ? activePage - 1 : 0)].map((_, i) => (
                <Button key={"button-" + i} text={i + 1} onClick={() => setActivePage(i + 1)} />
              ))
            )}
            <Button key={"button-" + activePage} text={activePage} intent={Intent.PRIMARY} />
            {numberOfPages - activePage >= 3 ? (
              <>
                <Button text={activePage + 1} onClick={() => setActivePage(activePage + 1)} />
                <Button text={activePage + 2} onClick={() => setActivePage(activePage + 2)} />
                <Button text={".."} disabled />
              </>
            ) : (
              [...Array(numberOfPages - activePage >= 0 ? numberOfPages - activePage : 0)].map((_, i) => {
                const index = i + activePage + 1;
                return <Button key={"button-" + index} text={index} onClick={() => setActivePage(index)} />;
              })
            )}
          </>
        )}
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
