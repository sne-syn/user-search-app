import React, { FC } from "react";

interface CardListProps {
  children: React.ReactNode;
}
const CardList: FC<CardListProps> = ({ children }) => {
  return <ul className="dse-card-list">{children}</ul>;
};

export default CardList;
