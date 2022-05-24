import { FC } from "react";
import HorizontalNavbar from "../components/layout/HorizontalNavbar";
import VerticalNavbar from "../components/layout/VerticalNavbar";

/**
 * Home Page FC
 * @returns the content of the home page
 */
const Home: FC = (): JSX.Element => {
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
    </>
  );
};

export default Home;
