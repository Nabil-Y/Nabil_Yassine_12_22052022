import data from "./mock-data";
import { userActivity } from "../customTypes";

/**
 * Gets User Activity by user id
 * @param id User id
 * @returns User activity
 */
const getUserActivityById = (id: Number) => {
  const filteredData: userActivity | undefined = data.USER_ACTIVITY.filter(
    (user) => user.userId === id
  ).shift();
  return filteredData;
};

export default getUserActivityById;
