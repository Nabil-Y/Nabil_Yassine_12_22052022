import { createContext } from "react";
import API from "../utils/API";

/**
 * App context for the main content
 */
const DataContext = createContext({
  id: 0,
  isAPI: false,
  DataAPI: API,
});

export default DataContext;
