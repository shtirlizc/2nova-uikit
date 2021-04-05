import React, { useEffect } from "react";
import { Chart } from "@antv/g2";

export type BarChartProps = {
  height?: number;
  data: any[];
  container?: string;
  colors?: Array<string>;
};

export const BarChart: React.FC<BarChartProps> = ({
  data = [],
  height = 300,
  container,
  colors = ["#FFDD00", "#D3D9DE"],
}) => {
  let chart: Chart;

  useEffect(() => {
    if (!chart) return;
    chart.changeData(data);
  }, [data]);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    chart = new Chart({
      container: container || "chart",
      height,
      autoFit: true,
      width: 615,
    });
    chart.scale("value", {
      alias: "Количество",
      nice: true,
    });
    chart.data(data);
    chart.axis("value", {
      title: {
        offset: 30,
      },
      tickLine: {
        style: {
          stroke: "#D3D9DE",
        },
      },
      line: {
        style: {
          stroke: "#D3D9DE",
        },
      },
      grid: {
        line: {
          type: "line",
          style: {
            lineDash: [2],
          },
        },
      },
    });

    chart
      .interval()
      .position("name*value")
      .color("type", colors)
      .adjust("stack")
      .label("value", (val) => {
        return {
          position: "middle",
          offset: 0,
          content: (originData) => {
            if (originData.value > 0) {
              return originData.value;
            }

            return "";
          },
          style: {
            fill: "#5E7080",
          },
        };
      });

    chart.legend({
      position: "bottom",
    });

    chart.axis("name", {
      label: null,
    });

    chart.render();
  }, []);

  return <div id="chart" />;
};
