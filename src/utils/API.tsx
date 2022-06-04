import data from "./mock-data";
import {
  userMainData,
  userActivity,
  userPerformance,
  userSessions,
} from "../customTypes";
import {
  MainDataResponse,
  PerformanceResponse,
  SessionsResponse,
  ActivityResponse,
} from "./Classes";
import axios from "axios";

/**
 * Gets User Main Data by user id
 * @param id User id
 * @returns User data
 */
const getUserMainDataById = (id: Number) => {
  const filteredData: userMainData | undefined = data.USER_MAIN_DATA.filter(
    (user) => user.id === id
  ).shift();
  return new MainDataResponse(filteredData);
};

/**
 * Gets User Activity by user id
 * @param id User id
 * @returns User activity
 */
const getUserActivityById = (id: Number) => {
  const filteredData: userActivity | undefined = data.USER_ACTIVITY.filter(
    (user) => user.userId === id
  ).shift();
  return new ActivityResponse(filteredData);
};

/**
 * Gets User Average Sessions by user id
 * @param id User id
 * @returns User average sessions
 */
const getUserAverageSessionsById = (id: Number) => {
  const filteredData: userSessions | undefined =
    data.USER_AVERAGE_SESSIONS.filter((user) => user.userId === id).shift();
  return new SessionsResponse(filteredData);
};

/**
 * Gets User Performance by user id
 * @param id User id
 * @returns User performance
 */
const getUserPerformanceById = (id: Number) => {
  const filteredData: userPerformance | undefined =
    data.USER_PERFORMANCE.filter((user) => user.userId === id).shift();
  return new PerformanceResponse(filteredData);
};

export default {
  getUserMainDataById,
  getUserActivityById,
  getUserAverageSessionsById,
  getUserPerformanceById,
};

export const fetchData = async (url: string) => {
  try {
    return await axios.get(url).then((res) => res.data.data);
  } catch (error) {
    console.log(error);
  }
};
