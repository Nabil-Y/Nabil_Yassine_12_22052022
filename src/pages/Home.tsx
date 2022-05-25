import { FC } from "react";
import HorizontalNavbar from "../components/layout/HorizontalNavbar";
import VerticalNavbar from "../components/layout/VerticalNavbar";
import Welcome from "../components/Welcome/Welcome";
import styles from "./Home.module.css";

/**
 * Home Page FC
 * @returns the content of the home page
 */
const Home: FC = (): JSX.Element => {
  return (
    <>
      <HorizontalNavbar />
      <main className={styles.main}>
        <VerticalNavbar />
        <Welcome />
      </main>
    </>
  );
};

export default Home;
