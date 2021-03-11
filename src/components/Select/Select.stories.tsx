import React from "react";

import { SelectCommon } from "./index";

const SelectStory = {
  title: "Select",
  component: SelectCommon,
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Basic = () => (
  <div style={{ width: 300 }}>
    <SelectCommon options={options} defaultValue={options[2]} />
  </div>
);

export default SelectStory;
