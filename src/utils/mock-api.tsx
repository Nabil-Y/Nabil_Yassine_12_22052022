import data from "./mock-data";

/**
 * Gets User Main Data by user id
 * @param id User id
 * @returns User data
 */
const getUserMainDataById = (id: Number) => {
  const filteredData = data.USER_MAIN_DATA.filter(
    (user) => user.id === id
  ).shift();
  return filteredData;
};

/**
 * Gets User Activity by user id
 * @param id User id
 * @returns User activity
 */
const getUserActivityById = (id: Number) => {
  const filteredData = data.USER_ACTIVITY.filter(
    (user) => user.userId === id
  ).shift();
  return filteredData;
};

/**
 * Gets User Average Sessions by user id
 * @param id User id
 * @returns User average sessions
 */
const getUserAverageSessionsById = (id: Number) => {
  const filteredData = data.USER_AVERAGE_SESSIONS.filter(
    (user) => user.userId === id
  ).shift();
  return filteredData;
};

/**
 * Gets User Performance by user id
 * @param id User id
 * @returns User performance
 */
const getUserPerformanceById = (id: Number) => {
  const filteredData = data.USER_PERFORMANCE.filter(
    (user) => user.userId === id
  ).shift();
  return filteredData;
};

export default {
  getUserMainDataById,
  getUserActivityById,
  getUserAverageSessionsById,
  getUserPerformanceById,
};
