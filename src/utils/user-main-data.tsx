import data from "./mock-data";
import { userMainData } from "../customTypes";

/**
 * Gets User Main Data by user id
 * @param id User id
 * @returns User data
 */
const getUserMainDataById = (id: Number) => {
  const filteredData: userMainData | undefined = data.USER_MAIN_DATA.filter(
    (user) => user.id === id
  ).shift();
  return filteredData;
};

export default getUserMainDataById;
