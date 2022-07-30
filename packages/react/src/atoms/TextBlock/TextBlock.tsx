import React, { FC } from "react";

interface TextBlockProps {
  content: string;
}

const TextBlock: FC<TextBlockProps> = ({ content }) => {
  return <p className="dse-text">{content}</p>;
};

export default TextBlock;
