import { ReactElement, useContext } from "react";
import Context from "../../../store/data-context";
import { userPerformanceData } from "../../../customTypes";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * SpiderChart Function
 * @returns Spider Chart component
 */
const SpiderChart = (): ReactElement => {
  const ctx = useContext(Context);
  const userPerformance = ctx.API.getUserPerformanceById(ctx.id);
  const formattedData: userPerformanceData[] = [];

  userPerformance?.data.map((item) => {
    formattedData.push({
      activity: userPerformance.kind[item.kind],
      value: item.value,
    } as userPerformanceData);
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} data={formattedData.reverse()}>
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
        <PolarAngleAxis
          dy={2}
          dataKey="activity"
          stroke="#FFFFFF"
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SpiderChart;
