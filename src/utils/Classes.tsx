import {
  userMainData,
  userActivity,
  userPerformance,
  userSessions,
} from "./customInterfaces";

/**
 * Model Class to format User Main Data Response from API
 */
export class MainDataResponse {
  public id;
  public userInfos;
  public score;
  public keyData;

  constructor(data: userMainData | undefined) {
    this.id = data?.id;
    this.userInfos = data?.userInfos;
    this.score = data?.score;
    this.keyData = data?.keyData;
  }

  getId() {
    return this.id;
  }

  getUserInfos() {
    return this.userInfos;
  }

  getFirstName() {
    return this.userInfos?.firstName;
  }

  getScore() {
    return this.score;
  }

  getKeyData() {
    return this.keyData;
  }
}

/**
 * Model Class to format User Performance Data Response from API
 */
export class PerformanceResponse {
  public userId;
  public kind;
  public data;

  constructor(data: userPerformance | undefined) {
    this.userId = data?.userId;
    this.kind = data?.kind;
    this.data = data?.data;
  }

  getUserId() {
    return this.userId;
  }

  getKind() {
    return this.kind;
  }

  getData() {
    return this.data;
  }
}

/**
 * Model Class to format User Activity Data Response from API
 */
export class ActivityResponse {
  public userId;
  public sessions;

  constructor(data: userActivity | undefined) {
    this.userId = data?.userId;
    this.sessions = data?.sessions;
  }

  getUserId() {
    return this.userId;
  }

  getSessions() {
    return this.sessions;
  }
}

/**
 * Model Class to format User Sessions Data Response from API
 */
export class SessionsResponse {
  public userId;
  public sessions;

  constructor(data: userSessions | undefined) {
    this.userId = data?.userId;
    this.sessions = data?.sessions;
  }

  getUserId() {
    return this.userId;
  }

  getSessions() {
    return this.sessions;
  }
}
