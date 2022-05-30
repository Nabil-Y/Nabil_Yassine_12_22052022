import { ReactElement, useState } from "react";
import HorizontalNavbar from "../components/layout/HorizontalNavbar";
import VerticalNavbar from "../components/layout/VerticalNavbar";
import Welcome from "../components/Welcome/Welcome";
import Dashboard from "../components/Dashboard/Dashboard";
import Context from "../store/data-context";
import MockApi from "..//utils/mock-api";
import styles from "./Home.module.css";

/**
 * Home Function
 * @returns the content of the home page
 */
const Home = (): ReactElement => {
  const [id, setId] = useState(12);
  const clickHandler = (): void => {
    id === 12 ? setId(18) : setId(12);
  };
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <main className={styles.main}>
        <Context.Provider value={{ id: id, setId: clickHandler, API: MockApi }}>
          <Welcome onClick={clickHandler} />
          <Dashboard />
        </Context.Provider>
      </main>
    </>
  );
};

export default Home;
