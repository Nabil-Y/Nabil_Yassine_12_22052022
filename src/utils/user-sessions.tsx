import data from "./mock-data";
import { userSessions } from "../customTypes";

/**
 * Gets User Average Sessions by user id
 * @param id User id
 * @returns User average sessions
 */
const getUserAverageSessionsById = (id: Number) => {
  const filteredData: userSessions | undefined =
    data.USER_AVERAGE_SESSIONS.filter((user) => user.userId === id).shift();
  return filteredData;
};

export default getUserAverageSessionsById;
