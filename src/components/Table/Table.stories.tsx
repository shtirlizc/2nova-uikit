import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "./index";

const SelectStory = {
  title: "Table",
  component: Table,
};

export const Basic = () => (
  <Table
    columns={[
      "№",
      "Адрес",
      "Зарегистрированы / Всего",
      "Факт / План по переводам",
      "Активный статус",
      "Совершают переводы",
    ]}
  >
    <Thead>
      <Tr>
        <Th>№</Th>
        <Th>Адрес</Th>
        <Th>Зарегистрированы / Всего</Th>
        <Th>Факт / План по переводам</Th>
        <Th>Активный статус</Th>
        <Th>Совершают переводы</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>3891 Ranchview Dr. Richardson, California 62639</Td>
        <Td>10/20</Td>
        <Td>10/20</Td>
        <Td>8</Td>
        <Td>19</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>2715 Ash Dr. San Jose, South Dakota 83475</Td>
        <Td>10/20</Td>
        <Td>10/20</Td>
        <Td>19</Td>
        <Td>13</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td>3891 Ranchview Dr. Richardson, California 62639</Td>
        <Td>10/20</Td>
        <Td>10/20</Td>
        <Td>17</Td>
        <Td>12</Td>
      </Tr>
    </Tbody>
  </Table>
);

export default SelectStory;
