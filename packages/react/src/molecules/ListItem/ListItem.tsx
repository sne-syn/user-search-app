import React, { FC } from "react";

interface ListItemProps {
  icon: React.ReactNode;
  content: React.ReactNode;
}
const ListItem: FC<ListItemProps> = ({ icon, content }) => {
  return (
    <li className="dse-list-item">
      {icon}
      {content}
    </li>
  );
};

export default ListItem;
