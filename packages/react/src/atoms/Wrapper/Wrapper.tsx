import React, { FC } from "react";

interface WrapperProps {
  type: "accent" | "main";
  children: React.ReactNode;
  interactive?: boolean;
  padded?: boolean;
}

const Wrapper: FC<WrapperProps> = ({ type, children, interactive, padded }) => {
  const isAccentBlock = type === "accent";

  return (
    <div
      className={`dse-wrapper ${isAccentBlock ? "dse-wrapper--accent" : ""} ${
        interactive ? "dse-wrapper--pointer" : ""
      } ${padded ? "dse-wrapper--padded" : ""}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
