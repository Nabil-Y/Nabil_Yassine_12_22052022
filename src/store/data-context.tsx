import { createContext } from "react";
import MockApi from "../utils/mock-api";

/**
 * App context for the main content
 */
const DataContext = createContext({
  id: 12,
  setId: () => {},
  API: MockApi,
});

export default DataContext;
