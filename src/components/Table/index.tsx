import React from "react";
import classNames from "classnames";

import s from "./Table.module.css";

type HeadCellType = {
  id: number;
  field: string;
  headerName: string;
};

type TableProps = {
  columns: HeadCellType[];
  rows: object[];
  withNumbers?: boolean;
};

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  withNumbers = false,
}) => {
  return (
    <div className={s.root}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            {withNumbers && <th className={s.th}>№</th>}
            {columns.map(({ id, headerName }) => (
              <th key={id} className={s.th}>
                {headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const [key] = Object.values(row);

            return (
              <tr key={key} className={s.tr}>
                {withNumbers && (
                  <td className={classNames(s.td, s.tdNumber)}>{index + 1}</td>
                )}
                {Object.entries(row).map((td, idx) => {
                  const [field, value] = td;
                  const [currentColumn] = columns.filter(
                    (col) => col.field === field
                  );

                  if (field === "id") {
                    return null;
                  }

                  return (
                    <td
                      key={field}
                      className={classNames(s.td, idx === 1 && s.tdRowName)}
                    >
                      <span>{currentColumn.headerName}</span>
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
