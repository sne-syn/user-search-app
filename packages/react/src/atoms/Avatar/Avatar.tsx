import React, { FC } from "react";

interface AvatarProps {
  src: string;
  alt: string;
  role?: "presentation" | "img";
  style?: React.CSSProperties;
}
const Avatar: FC<AvatarProps> = ({ src, alt, style, role = "img" }) => {
  return (
    <img
      style={style}
      className="dse-avatar"
      src={src}
      alt={alt}
      role={role}
      data-testid="avatar"
    />
  );
};

export default Avatar;
