import data from "./mock-data";
import { userPerformance } from "../customTypes";

/**
 * Gets User Performance by user id
 * @param id User id
 * @returns User performance
 */
const getUserPerformanceById = (id: Number) => {
  const filteredData: userPerformance | undefined =
    data.USER_PERFORMANCE.filter((user) => user.userId === id).shift();
  return filteredData;
};

export default getUserPerformanceById;
