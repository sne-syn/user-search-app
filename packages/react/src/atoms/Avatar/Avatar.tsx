import React, { FC } from "react";

interface AvatarProps {
  src: string;
}
const Avatar: FC<AvatarProps> = ({ src }) => {
  return <img className="dse-avatar" src={src} />;
};

export default Avatar;
