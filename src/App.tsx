import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MockApi from "./utils/mock-api";

/**
 * App FC
 * @returns the main content of the App
 */
const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
