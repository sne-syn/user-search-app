import React, { FC } from "react";

interface WrapperProps {
  type: "accent" | "main";
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ type, children }) => {
  const isAccentBlock = type === "accent";
  return (
    <div
      className={`dse-wrapper ${isAccentBlock ? "dse-wrapper--accent" : ""}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
