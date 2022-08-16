import React, { FC } from "react";

interface CardSubtitleProps {
  content: string;
  color?: string;
  style?: React.CSSProperties;
}

const CardSubtitle: FC<CardSubtitleProps> = ({ content, style, color }) => {
  return (
    <span
      style={{ ...style, color }}
      className="dse-card-subtitle"
      data-testid="card-subtitle"
    >
      {content}
    </span>
  );
};

export default CardSubtitle;
