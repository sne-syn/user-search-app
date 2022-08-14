import React, { FC } from "react";

interface ListProps {
  children: React.ReactNode | React.ReactNode[];
}
const List: FC<ListProps> = ({ children }) => {
  return <ul className="dse-list">{children}</ul>;
};

export default List;
