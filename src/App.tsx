import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import HorizontalNavbar from "./components/layout/HorizontalNavbar";
import VerticalNavbar from "./components/layout/VerticalNavbar";
import Home from "./pages/Home";
import User from "./pages/User";
import Error from "./pages/Error";

/**
 * App Function
 * @returns the main content of the App
 */
const App = (): ReactElement => {
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <Routes>
        <Route path="/user/:userId" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
