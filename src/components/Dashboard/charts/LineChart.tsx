import { ReactElement, useContext } from "react";
import Context from "../../../store/data-context";
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
  const ctx = useContext(Context);
  return <div>LineChart</div>;
};

export default LineChart;
