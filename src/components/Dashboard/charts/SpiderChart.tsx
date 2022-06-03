import { ReactElement, useContext } from "react";
import DataContext from "../../../store/data-context";
import API from "../../../utils/API";
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
  const ctx = useContext(DataContext);
  const userId = ctx.id;
  const response = API.getUserPerformanceById(userId);
  const activities = response.getKind();
  const userPerformance = response.getData();

  const formattedData = userPerformance?.map((item) => {
    return {
      activity: activities![item.kind],
      value: item.value,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} data={formattedData?.reverse()}>
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
