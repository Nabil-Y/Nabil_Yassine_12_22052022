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
 * Custom interface for API response of User Performance
 */
export interface userPerf {
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
export interface userPerfData {
  activity: string;
  value: number;
}
