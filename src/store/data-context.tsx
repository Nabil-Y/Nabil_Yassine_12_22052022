import { createContext } from "react";

/**
 * App context for the main content
 */
const DataContext = createContext({
  isAPI: false,
});

export default DataContext;
