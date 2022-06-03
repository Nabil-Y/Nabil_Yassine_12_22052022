import { ReactElement, useContext } from "react";
import DataContext from "../../../store/data-context";
import API from "../../../utils/API";
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import styles from "./SessionsChart.module.css";
/**
 * LineChart Function
 * @returns Line Chat component
 */
const SessionsChart = (): ReactElement => {
  const ctx = useContext(DataContext);
  const userId = ctx.id;
  const response = API.getUserAverageSessionsById(userId);

  const days: string[] = ["L", "M", "M", "J", "V", "S", "D"];
  const formattedData = days.map((item, index) => {
    return {
      name: item,
      value: response.sessions![index].sessionLength,
    };
  });

  return (
    <>
      <span className={styles.title}>
        Durée moyenne des <br />
        sessions
      </span>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 0, left: 15, right: 15, bottom: 15 }}
        >
          <XAxis
            dataKey="name"
            stroke="#FFF"
            tickLine={false}
            axisLine={false}
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
            dot={false}
            activeDot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SessionsChart;
