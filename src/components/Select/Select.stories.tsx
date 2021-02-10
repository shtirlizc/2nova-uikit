import React from "react";

import { SelectCommon } from "./index";

const SelectStory = {
  title: "Select",
  component: SelectCommon,
};

export const Basic = () => (
  <div style={{ width: 400 }}>
    <SelectCommon
      options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ]}
    />
  </div>
);

export default SelectStory;
