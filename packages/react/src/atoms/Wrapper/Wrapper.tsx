import React, { FC } from "react";

interface WrapperProps {
  type: "accent" | "main";
  children: React.ReactNode;
  interactive?: boolean;
}

const Wrapper: FC<WrapperProps> = ({ type, children, interactive }) => {
  const isAccentBlock = type === "accent";
  return (
    <div
      className={`dse-wrapper ${isAccentBlock ? "dse-wrapper--accent" : ""} ${
        interactive ? "dse-wrapper--pointer" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
