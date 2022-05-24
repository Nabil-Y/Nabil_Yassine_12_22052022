import { FC } from "react";
import Home from "./pages/Home";
import MockApi from "./utils/mock-api";

/**
 * App FC
 * @returns the main content of the App
 */
const App: FC = (): JSX.Element => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
