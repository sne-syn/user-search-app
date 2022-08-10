import React from 'react';

const DefinitionList = ({ list }) => {
    const capitalizeChar = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    return (React.createElement("dl", { className: "dse-definitions" }, Object.keys(list).map((key) => {
        return (React.createElement("div", { key: key, className: "dse-definition" },
            React.createElement("dt", { className: "dse-definition__term" }, capitalizeChar(key)),
            React.createElement("dd", { className: "dse-definition__desc" }, list[key])));
    })));
};

export { DefinitionList as default };
//# sourceMappingURL=DefinitionList.js.map
