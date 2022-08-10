import React, { FC } from "react";

interface DefinitionListProps {
  list: { [key: string]: number | string };
}

const DefinitionList: FC<DefinitionListProps> = ({ list }) => {
  const capitalizeChar = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <dl className="dse-definitions">
      {Object.keys(list).map((key) => {
        return (
          <div key={key} className="dse-definition">
            <dt className="dse-definition__term">{capitalizeChar(key)}</dt>
            <dd className="dse-definition__desc">{list[key]}</dd>
          </div>
        );
      })}
    </dl>
  );
};

export default DefinitionList;
