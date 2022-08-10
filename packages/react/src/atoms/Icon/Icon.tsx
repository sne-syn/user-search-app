import React, { FC } from "react";

interface IconProps {
  iconData: { src: string; description: string; hasValue: boolean | null };
}

const Icon: FC<IconProps> = ({ iconData }) => {
  const transparencyClass =
    iconData.hasValue === true ? "dse-icon--transparent" : "";

  return (
    <img
      className={`dse-icon ${transparencyClass}`}
      src={`./assets/${iconData.src}.svg`}
      alt={iconData.description}
    />
  );
};

export default Icon;
