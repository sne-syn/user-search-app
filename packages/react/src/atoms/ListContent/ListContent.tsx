import React, { FC } from "react";

interface ListContentProps {
  content: string | null;
  isLink: boolean;
}

const ListContent: FC<ListContentProps> = ({ content, isLink }) => {
  const contentDescription = content ? content : "Not available";
  const href = isLink && content ? content : "";
  const contentClass = `dse-list-content ${
    !content ? "dse-list-content--transparent" : ""
  }`;

  return (
    <div>
      {isLink && content ? (
        <a
          href={href}
          className={`${contentClass} dse-list-content--link`}
          target="_blank"
          rel="noreferrer"
        >
          {contentDescription}
        </a>
      ) : (
        <p className={`${contentClass}  dse-list-content--text`}>
          {contentDescription}
        </p>
      )}
    </div>
  );
};

export default ListContent;
