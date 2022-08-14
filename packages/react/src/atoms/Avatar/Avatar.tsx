import React, { FC } from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
}
const Avatar: FC<AvatarProps> = ({ src, alt, style }) => {
  return (
    <img
      style={style}
      className="dse-avatar"
      src={src}
      alt={alt ? alt : "User's avatar"}
    />
  );
};

export default Avatar;
