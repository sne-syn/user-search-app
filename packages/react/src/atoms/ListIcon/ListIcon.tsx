import React, { FC } from "react";

interface ListIconProps {
  src: string;
  alt: string;
  isTransparent?: boolean;
}

const ListIcon: FC<ListIconProps> = ({ src, alt, isTransparent }) => {
  const transparencyClass = isTransparent ? "dse-list-icon--transparent" : "";

  return (
    <img
      className={`dse-list-icon ${transparencyClass}`}
      src={`./assets/${src}.svg`}
      alt={alt}
    />
  );
};

export default ListIcon;
