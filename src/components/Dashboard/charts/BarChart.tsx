import { ReactElement, useContext } from "react";
import DataContext from "../../../store/data-context";
import API from "../../../utils/API";
import styles from "./BarChart.module.css";

/**
 * BarChart
 * @returns Bar Chart component
 */
const BarChart = (): ReactElement => {
  return <div className={styles["bar-chart"]}>BarChart</div>;
};

export default BarChart;
