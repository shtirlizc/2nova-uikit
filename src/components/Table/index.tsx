import React, { ReactElement } from "react";
import classNames from "classnames";

import s from "./Table.module.css";

const TableContext = React.createContext({});

type TdProps = {
  colNumber?: number;
};

export const Td: React.FC<TdProps> = ({ colNumber, children }) => {
  return (
    <TableContext.Consumer>
      {(columns) => {
        return (
          <td
            className={classNames(
              s.td,
              colNumber === 0 && s.tdNumber,
              colNumber === 1 && s.tdRowName
            )}
          >
            {/* @ts-ignore */}
            {columns && <span>{columns[colNumber]}</span>}
            {children}
          </td>
        );
      }}
    </TableContext.Consumer>
  );
};

export const Th: React.FC = ({ children }) => {
  return <th className={s.th}>{children}</th>;
};

export const Tr: React.FC = ({ children }) => {
  return (
    <tr className={s.tr}>
      {/* @ts-ignore */}
      {children?.flat().map((cell: ReactElement, idx: number) => (
        <Td key={idx} colNumber={idx}>
          {cell.props.children}
        </Td>
      ))}
    </tr>
  );
};

export const Thead: React.FC = ({ children }) => {
  return <thead className={s.thead}>{children}</thead>;
};

export const Tbody: React.FC = ({ children }) => {
  return <tbody className={s.tbody}>{children}</tbody>;
};

type TableProps = {
  columns?: string[];
};

export const Table: React.FC<TableProps> = ({ columns, children }) => {
  return (
    <TableContext.Provider value={columns || []}>
      <table className={s.table}>{children}</table>
    </TableContext.Provider>
  );
};
