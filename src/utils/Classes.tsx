import {
  userMainData,
  userActivity,
  userPerformance,
  userSessions,
} from "../customTypes";

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
  public id;
  public kind;
  public data;

  constructor(data: userPerformance | undefined) {
    this.id = data?.userId;
    this.kind = data?.kind;
    this.data = data?.data;
  }

  getId() {
    return this.id;
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
  public id;
  public sessions;

  constructor(data: userActivity | undefined) {
    this.id = data?.userId;
    this.sessions = data?.sessions;
  }

  getId() {
    return this.id;
  }

  getSessions() {
    return this.sessions;
  }
}

/**
 * Model Class to format User Sessions Data Response from API
 */
export class SessionsResponse {
  public id;
  public sessions;

  constructor(data: userSessions | undefined) {
    this.id = data?.userId;
    this.sessions = data?.sessions;
  }

  getId() {
    return this.id;
  }

  getSessions() {
    return this.sessions;
  }
}
