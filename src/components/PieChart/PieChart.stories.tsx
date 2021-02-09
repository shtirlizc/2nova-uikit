import React from "react";

import { PieChart } from "./index";

const PieChartStory = {
  title: "Button",
  component: PieChart,
};

export const Basic = () => (
  <PieChart progress={75}>операторов зарег-но</PieChart>
);

export default PieChartStory;
