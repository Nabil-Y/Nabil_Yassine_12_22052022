import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

/**
 * App Function
 * @returns the main content of the App
 */
const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
