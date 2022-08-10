import React from 'react';

const Wrapper = ({ type, children, interactive }) => {
    const isAccentBlock = type === "accent";
    return (React.createElement("div", { className: `dse-wrapper ${isAccentBlock ? "dse-wrapper--accent" : ""} ${interactive ? "dse-wrapper--pointer" : ""}` }, children));
};

export { Wrapper as default };
//# sourceMappingURL=Wrapper.js.map
