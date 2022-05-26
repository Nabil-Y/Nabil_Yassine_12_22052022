import { ReactElement } from "react";
import Card from "../UI/Card";
import LineChart from "./Charts/LineChart";
import SpiderChart from "./Charts/SpiderChart";
import RadialChart from "./Charts/RadialChart";
import styles from "./BottomCharts.module.css";

/**
 * BottomCharts function
 * @returns Bottom Charts component
 */
const BottomCharts = (): ReactElement => {
  const charts: ReactElement[] = [
    <LineChart />,
    <SpiderChart />,
    <RadialChart />,
  ];
  return (
    <div className={styles["bottom-charts"]}>
      {charts.map((chart, index) => (
        <Card key={index + " bottom-chart"} className={styles["bottom-chart"]}>
          {chart}
        </Card>
      ))}
    </div>
  );
};

export default BottomCharts;
