import React, { FC } from "react";

interface CardTitleProps {
  content: string;
}

const CardTitle: FC<CardTitleProps> = ({ content }) => {
  return <h2 className="dse-card-title">{content}</h2>;
};

export default CardTitle;
