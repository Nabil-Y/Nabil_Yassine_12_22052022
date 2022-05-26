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
