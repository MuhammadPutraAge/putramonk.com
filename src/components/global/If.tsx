import { ReactNode } from "react";

interface IfProps {
  condition: boolean;
  children: ReactNode;
}

export default function If({ condition, children }: IfProps) {
  if (condition) {
    return children;
  }

  return null;
}
