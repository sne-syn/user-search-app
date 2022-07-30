import React from 'react';

const DefinitionList = ({ list }) => {
    return (React.createElement("dl", null, Object.keys(list).map((key) => {
        return (React.createElement("div", { key: key },
            React.createElement("h2", null,
                key,
                ": ",
                list[key]),
            React.createElement("hr", null)));
    })));
};

export { DefinitionList as default };
//# sourceMappingURL=DefinitionList.js.map
