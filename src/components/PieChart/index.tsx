import React, { useEffect, useState, useRef } from "react";

import s from "./PieChart.module.scss";

type PieChartProps = {
  progress: number;
  size?: number;
  strokeWidth?: number;
  circleOneStroke?: string;
  circleTwoStroke?: string;
};

export const PieChart: React.FC<PieChartProps> = ({
  progress,
  size = 120,
  strokeWidth = 2,
  circleOneStroke = "#d3d9de",
  circleTwoStroke = "#ffc400",
  children,
}) => {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  let correctProgress = progress;
  if (progress > 100) {
    correctProgress = 100;
  } else if (progress < 0) {
    correctProgress = 0;
  }

  const circleRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((100 - correctProgress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, correctProgress, offset]);

  return (
    <div className={s.root}>
      <svg className={s.svg} width={size} height={size}>
        <circle
          className={s.circleBg}
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          ref={circleRef}
          className={s.circle}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className={s.text}>
        <h4 className={s.textProgress}>{correctProgress}%</h4>
        {children && <p className={s.textDescription}>{children}</p>}
      </div>
    </div>
  );
};
