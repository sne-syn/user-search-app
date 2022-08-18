import React, { FC } from "react";

interface CardTitleProps {
  content: string;
  style?: React.CSSProperties;
}

const CardTitle: FC<CardTitleProps> = ({ content, style }) => {
  return (
    <h2 className="dse-card-title" style={style} data-testid="card-title">
      {content}
    </h2>
  );
};

export default CardTitle;
