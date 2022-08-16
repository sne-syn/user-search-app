import React, { FC } from "react";

interface CardListProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
const CardList: FC<CardListProps> = ({ children, style }) => {
  return (
    <ul style={style} className="dse-card-list" data-testid="card-list">
      {children}
    </ul>
  );
};

export default CardList;
