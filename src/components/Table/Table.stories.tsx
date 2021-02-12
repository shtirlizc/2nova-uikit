import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "./index";

const SelectStory = {
  title: "Table",
  component: Table,
};

const data = {
  head: [
    "№",
    "Адрес",
    "Зарегистрированы / Всего",
    "Факт / План по переводам",
    "Активный статус",
    "Совершают переводы",
  ],
  body: [
    [
      "3891 Ranchview Dr. Richardson, California 62639",
      "10/20",
      "10/20",
      "8",
      "19",
    ],
    ["2715 Ash Dr. San Jose, South Dakota 83475", "10/20", "10/20", "19", "13"],
    [
      "3891 Ranchview Dr. Richardson, California 62639",
      "10/20",
      "10/20",
      "17",
      "12",
    ],
  ],
};

export const Basic = () => (
  <Table columns={data.head}>
    <Thead>
      <Tr>
        {data.head.map((th, idx) => (
          <Th key={idx}>{th}</Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {data.body.map((row, index) => (
        <Tr key={index}>
          <Td>{index + 1}</Td>
          {row.map((td, idx) => (
            <Td key={idx}>{td}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default SelectStory;
