import { ReactElement, useContext } from "react";
import DataContext from "../../../store/data-context";
import API from "../../../utils/API";
import { userSessions } from "../../../customTypes";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * LineChart Function
 * @returns Line Chat component
 */
const LineChart = (): ReactElement => {
  return <div>LineChart</div>;
};

export default LineChart;
