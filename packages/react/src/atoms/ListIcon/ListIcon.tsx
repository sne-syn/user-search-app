import React, { FC } from "react";

interface ListIconProps {
  iconData: { src: string; description: string; hasValue: boolean | null };
}

const ListIcon: FC<ListIconProps> = ({ iconData }) => {
  const transparencyClass =
    iconData.hasValue === true ? "dse-list-icon--transparent" : "";

  return (
    <img
      className={`dse-list-icon ${transparencyClass}`}
      src={`./assets/${iconData.src}.svg`}
      alt={iconData.description}
    />
  );
};

export default ListIcon;
