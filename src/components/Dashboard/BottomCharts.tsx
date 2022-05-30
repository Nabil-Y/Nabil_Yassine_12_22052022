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
  const charts: [ReactElement, string][] = [
    [<LineChart />, "line-chart"],
    [<SpiderChart />, "spider-chart"],
    [<RadialChart />, "radial-chart"],
  ];
  return (
    <div className={styles["bottom-charts"]}>
      {charts.map((item) => (
        <Card
          key={item[1]}
          className={`${styles["bottom-chart"]} ${styles[item[1]]}`}
        >
          {item[0]}
        </Card>
      ))}
    </div>
  );
};

export default BottomCharts;
