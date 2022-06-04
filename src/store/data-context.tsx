import { createContext } from "react";
import API from "../utils/API";

/**
 * App context for the main content
 */
const DataContext = createContext({
  isAPI: false,
});

export default DataContext;
