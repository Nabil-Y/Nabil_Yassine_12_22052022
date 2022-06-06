import { ReactElement } from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import styles from "./RadialChart.module.css";

/**
 * RadialChart Function
 * @param props contains user score
 * @returns Radial Chart component
 */
const RadialChart = (props: { score: number | undefined }): ReactElement => {
  const { score } = props;
  const formattedData = [
    {
      name: "Score",
      value: score,
    },
  ];

  return (
    <>
      <h3 className={styles.kpi}>Score</h3>
      <div className={styles.label}>
        <span className={styles.score}>{`${score ? score * 100 : "0"} %`}</span>
        <br /> de votre <br /> objectif
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={formattedData}
            dataKey="value"
            nameKey="name"
            fill="#FF0000"
            innerRadius="65%"
            outerRadius="75%"
            startAngle={90}
            endAngle={score ? 90 + score * 360 : 0}
            cornerRadius="50%"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default RadialChart;
