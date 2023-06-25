import React from "react";

interface VisibilityProps {
  children: React.ReactNode;
  visible: boolean;
}

const Visibility = ({ children, visible }: VisibilityProps) => {
  if (!visible) return <></>;
  return <div>{children}</div>;
};

export default Visibility;
