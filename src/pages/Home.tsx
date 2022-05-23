import { FC } from "react";
import HorizontalNavbar from "../components/layout/HorizontalNavbar";
import VerticalNavbar from "../components/layout/VerticalNavbar";

const Home: FC = () => {
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
    </>
  );
};

export default Home;
