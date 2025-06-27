import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Combines class names using clsx and resolves Tailwind conflicts with twMerge
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
