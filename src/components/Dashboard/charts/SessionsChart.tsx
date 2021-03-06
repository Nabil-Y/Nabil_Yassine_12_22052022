import { ReactElement } from "react";
import { SessionsResponse } from "../../../utils/Classes";
import styles from "./SessionsChart.module.css";
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * LineChart Function
 * @param props contains user sessions data
 * @returns Line Chat component
 */
const SessionsChart = (props: {
  data: SessionsResponse | undefined;
}): ReactElement => {
  const { data } = props;

  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const formattedData = days.map((item, index) => {
    return {
      name: item,
      value: data?.sessions![index].sessionLength,
    };
  });

  return (
    <>
      <h3 className={styles.title}>
        Durée moyenne des <br />
        sessions
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 0, left: 15, right: 15, bottom: 10 }}
        >
          <XAxis
            dataKey="name"
            stroke="#FFF"
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis hide={true} padding={{ top: 80 }} />
          <Tooltip
            formatter={(value: number) => [`${value} min`]}
            cursor={{
              stroke: "#000",
              strokeOpacity: 0.1,
              strokeWidth: 40,
            }}
            labelStyle={{
              display: "none",
            }}
            itemStyle={{
              color: "#000",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FFF"
            strokeWidth={1.5}
            dot={false}
            activeDot={{
              stroke: "#FFF",
              strokeOpacity: 0.4,
              strokeWidth: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SessionsChart;
