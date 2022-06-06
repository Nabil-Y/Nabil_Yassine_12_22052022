import { ReactElement } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { userPerformance } from "../../../customInterfaces";

/**
 * SpiderChart Function
 * @returns Spider Chart component
 */
const SpiderChart = (props: { data: userPerformance }): ReactElement => {
  const { data } = props;
  const activities = data.kind;
  const userPerformance = data.data;

  const formattedData = userPerformance?.map((item) => {
    return {
      activity: activities![item.kind],
      value: item.value,
    };
  });

  return (
    <ResponsiveContainer width="100%">
      <RadarChart outerRadius="62%" data={formattedData?.reverse()}>
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
