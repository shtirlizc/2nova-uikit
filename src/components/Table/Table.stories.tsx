import React from "react";
import { Table } from "./index";

const SelectStory = {
  title: "Table",
  component: Table,
};

const columns = [
  { id: 1, field: "address", headerName: "Адрес" },
  { id: 2, field: "total", headerName: "Зарегистрированы / Всего" },
  { id: 3, field: "plan", headerName: "Факт / План по переводам" },
  { id: 4, field: "active", headerName: "Активный статус" },
  { id: 5, field: "process", headerName: "Совершают переводы" },
];
const rows = [
  {
    id: 1,
    address: "3891 Ranchview Dr. Richardson, California 62639",
    total: "10/20",
    plan: "10/20",
    active: "8",
    process: "19",
  },
  {
    id: 2,
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    total: "10/20",
    plan: "10/20",
    active: "19",
    process: "13",
  },
  {
    id: 3,
    address: "3891 Ranchview Dr. Richardson, California 62639",
    total: "10/20",
    plan: "10/20",
    active: "17",
    process: "12",
  },
];

export const Basic = () => <Table columns={columns} rows={rows} />;

export default SelectStory;
