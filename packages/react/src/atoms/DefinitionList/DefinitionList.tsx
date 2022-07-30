import React, { FC } from "react";

interface DefinitionListProps {
  list: { [key: string]: number | string };
}

const DefinitionList: FC<DefinitionListProps> = ({ list }) => {
  return (
    <dl>
      {Object.keys(list).map((key) => {
        return (
          <div key={key}>
            <h2>
              {key}: {list[key]}
            </h2>

            <hr />
          </div>
        );
      })}
    </dl>
  );
};

export default DefinitionList;
