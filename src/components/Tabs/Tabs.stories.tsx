import React from "react";
import { Tabs, Tab } from "./index";

const SelectStory = {
  title: "Tabs",
  component: Tabs,
};

export const Basic = () => (
  <Tabs
    onChange={(newTab) => {
      console.log("tab was changed", newTab);
    }}
  >
    <Tab>По активности</Tab>
    <Tab active>По переводам</Tab>
    <Tab>По порядку</Tab>
  </Tabs>
);

export default SelectStory;
