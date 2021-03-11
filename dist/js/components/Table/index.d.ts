import React from "react";
declare type HeadCellType = {
    id: number;
    field: string;
    headerName: string;
};
declare type TableProps = {
    columns: HeadCellType[];
    rows: object[];
};
export declare const Table: React.FC<TableProps>;
export {};
