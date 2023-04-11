
import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import TitleText from "../TitleText/TitleText";

const data = [
  {
    subject: "Assignment 1",
    A: 100,
    fullMark: 100,
  },
  {
    subject: "Assignment 2",
    A: 100,
    fullMark: 100,
  },
  {
    subject: "Assignment 3",
    A: 100,
    fullMark: 100,
  },
  {
    subject: "Assignment 4",
    A: 100,
    fullMark: 100,
  },
  {
    subject: "Assignment 5",
    A: 100,
    fullMark: 100,
  },
  {
    subject: "Assignment 6",
    A: 100,
    fullMark: 100,
  },
  {
    subject: "Assignment 7",
    A: 100,
    fullMark: 100,
  },
  {
    subject: "Assignment 8",
    A: 100,
    fullMark: 100,
  },
];

const Statistics = () => {
  return (
    <div>
        <div>
            <TitleText>Statistics</TitleText>
        </div>
        <div>
        <RadarChart
      cx={400}
      cy={250}
      outerRadius={170}
      width={800}
      height={490}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis domain={[0, 100]}/>
      <Tooltip></Tooltip>
      <Legend></Legend>
      <Radar
        name="Rimon"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
        </div>
    </div>
  );
};

export default Statistics;
