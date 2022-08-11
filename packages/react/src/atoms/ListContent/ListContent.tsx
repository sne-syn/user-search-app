import React, { FC } from "react";

interface ListContentProps {
  content: string | null;
  isLink: boolean;
}

const ListContent: FC<ListContentProps> = ({ content, isLink }) => {
  const contentDescription = content ? content : "Not available";
  const href = isLink && content ? content : "";

  return (
    <div className="dse-list-content">
      {isLink ? (
        <a
          href={href}
          className="dse-list-content__link"
          target="_blank"
          rel="noreferrer"
        >
          {contentDescription}
        </a>
      ) : (
        <p className="dse-list-content__link">{contentDescription}</p>
      )}
    </div>
  );
};

export default ListContent;
