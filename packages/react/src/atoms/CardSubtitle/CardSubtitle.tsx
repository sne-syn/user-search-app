import React, { FC } from "react";

interface CardSubtitleProps {
  content: string;
}

const CardSubtitle: FC<CardSubtitleProps> = ({ content }) => {
  return <span className="dse-card-subtitle">{content}</span>;
};

export default CardSubtitle;
