import { ReactElement } from "react";
import HorizontalNavbar from "../components/layout/HorizontalNavbar";
import VerticalNavbar from "../components/layout/VerticalNavbar";
import Welcome from "../components/Welcome/Welcome";
import Dashboard from "../components/Dashboard/Dashboard";
import styles from "./Home.module.css";

/**
 * Home Function
 * @returns the content of the home page
 */
const Home = (): ReactElement => {
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <main className={styles.main}>
        <Welcome />
        <Dashboard />
      </main>
    </>
  );
};

export default Home;
