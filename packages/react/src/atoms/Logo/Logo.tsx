import React, { FC } from "react";

interface LogoProps {
  name: string;
}

const Logo: FC<LogoProps> = ({ name }) => {
  return <p className="dse-logo">{name}</p>;
};

export default Logo;
