import {
  MainDataResponse,
  PerformanceResponse,
  SessionsResponse,
  ActivityResponse,
} from "./Classes";
import axios from "axios";

/**
 * API class with getter functions
 */
export default class API {
  public route;

  constructor() {
    this.route = "http://localhost:3000";
  }

  /**
   * Get User Main Data By Id Function
   * @param userId User Id to filter data
   * @param isApi If true, gets data from API
   * @returns User Main Data by Id
   */
  async getUserMainDataByID(userId: number | string, isApi: boolean) {
    try {
      const url = isApi
        ? `${this.route}/user/${+userId}`
        : "/Mock-data/User-MainData.json";
      const response = await axios.get(url);
      const data = await response.data.data;
      return new MainDataResponse(data);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Get User Performance Data By Id Function
   * @param userId User Id to filter data
   * @param isApi If true, gets data from API
   * @returns User Performance Data by Id
   */
  async getUserPerformanceByID(userId: number | string, isApi: boolean) {
    try {
      const url = isApi
        ? `${this.route}/user/${+userId}/performance`
        : "/Mock-data/User-Performance.json";
      const response = await axios.get(url);
      const data = await response.data.data;
      return new PerformanceResponse(data);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Get User Sessions Data By Id Function
   * @param userId User Id to filter data
   * @param isApi If true, gets data from API
   * @returns User Sessions Data by Id
   */
  async getUserSessionsByID(userId: number | string, isApi: boolean) {
    try {
      const url = isApi
        ? `${this.route}/user/${+userId}/average-sessions`
        : "/Mock-data/User-Sessions.json";
      const response = await axios.get(url);
      const data = await response.data.data;
      return new SessionsResponse(data);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Get User Activity Data By Id Function
   * @param userId User Id to filter data
   * @param isApi If true, gets data from API
   * @returns User Activity Data by Id
   */
  async getUserActivityByID(userId: number | string, isApi: boolean) {
    try {
      const url = isApi
        ? `${this.route}/user/${+userId}/activity`
        : "/Mock-data/User-Activity.json";
      const response = await axios.get(url);
      const data = await response.data.data;
      return new ActivityResponse(data);
    } catch (err) {
      console.log(err);
    }
  }
}
