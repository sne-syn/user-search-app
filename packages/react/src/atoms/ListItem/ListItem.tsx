import React, { FC } from "react";

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem: FC<ListItemProps> = ({ children }) => {
  return <li className="dse-list-item">{children}</li>;
};

export default ListItem;
