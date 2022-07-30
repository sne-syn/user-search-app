import React, { FC } from "react";

interface VisuallyHiddenProps {
  tagName: string;
  content: string;
}

const VisuallyHidden: FC<VisuallyHiddenProps> = ({ tagName, content }) => {
  const CustomTag = tagName as keyof JSX.IntrinsicElements;
  return <CustomTag className="dse-visually-hidden">{content}</CustomTag>;
};

export default VisuallyHidden;
