import React, { FC } from "react";

interface LinkProps {
  link: string | null;
}

const Link: FC<LinkProps> = ({ link }) => {
  const linkName = link ? link : "Not available";
  return (
    <a href="" className="dse-link" target="_blank" rel="noreferrer">
      {linkName}
    </a>
  );
};

export default Link;
