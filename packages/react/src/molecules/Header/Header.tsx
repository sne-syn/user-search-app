import React, { FC } from "react";

interface HeaderProps {
  logo: React.ReactNode;
  menu?: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ logo, menu }) => {
  return (
    <header className="dse-header">
      {logo}
      {menu && menu}
    </header>
  );
};

export default Header;
