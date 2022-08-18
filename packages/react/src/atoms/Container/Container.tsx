import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Container: FC<ContainerProps> = ({ children, style }) => {
  return (
    <div className="dse-container" style={style} data-testid="container">
      {children}
    </div>
  );
};

export default Container;
