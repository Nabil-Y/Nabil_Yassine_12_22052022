//Custom types and interfaces used in the app

import { ReactNode } from "react";

/**
 * Custom interface for card and icon card props typing
 */
export interface cardProps {
  /**
   * Card class for optional custom styling
   */
  className?: string;
  /**
   * Card Content
   */
  children: ReactNode;
}

/**
 * Custom Interface for all userData fetched from API
 */
export interface userData {
  MainData?: userMainData | undefined;
  Performance?: userPerformance | undefined;
  Sessions?: userSessions | undefined;
  Activity?: userActivity | undefined;
}

/**
 * Custom interface for API response of User Performance
 */
export interface userPerformance {
  userId: number;
  kind: Record<number, string>;
  data: {
    value: number;
    kind: number;
  }[];
}

/**
 * Custom interface to format userPerfData for chart component
 */
export interface userPerformanceData {
  activity: string;
  value: number;
}

/**
 * Custom interface for API response of User Main Data
 */
export interface userMainData {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score: number;
  keyData: Record<string, number>;
}

/**
 * Custom interface for API response of User Activity
 */
export interface userActivity {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
}

/**
 * Custom interface for API response of User Sessions
 */
export interface userSessions {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
}
