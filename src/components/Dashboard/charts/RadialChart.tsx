import { ReactElement, useContext } from "react";
import Context from "../../../store/data-context";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import styles from "./RadialChart.module.css";

/**
 * RadialChart Function
 * @returns Radial Chart component
 */
const RadialChart = (): ReactElement => {
  const ctx = useContext(Context);
  const userScore: number | undefined = ctx.API.getUserMainDataById(
    ctx.id
  )?.score;
  const formattedData = [
    {
      name: "Score",
      value: userScore,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={formattedData}
            dataKey="value"
            nameKey="name"
            fill="#FF0000"
            innerRadius={80}
            outerRadius={90}
            startAngle={90}
            endAngle={userScore ? 90 + userScore * 360 : 0}
            cornerRadius="50%"
          />
        </PieChart>
      </ResponsiveContainer>
      <span className={styles.kpi}>Score</span>
      <div className={styles.label}>
        <span className={styles.score}>{`${
          userScore ? userScore * 100 : "0"
        } %`}</span>
        <br /> de votre <br /> objectif
      </div>
    </>
  );
};

export default RadialChart;
