import React from "react";

import { PieChart } from "./index";

const PieChartStory = {
  title: "PieChart",
  component: PieChart,
};

export const Basic = () => (
  <PieChart progress={35}>операторов зарег-но</PieChart>
);

export default PieChartStory;
