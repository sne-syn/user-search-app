import React from 'react';

const Wrapper = ({ type, children }) => {
    const isAccentBlock = type === "accent";
    return (React.createElement("div", { className: `dse-wrapper ${isAccentBlock ? "dse-wrapper--accent" : ""}` }, children));
};

export { Wrapper as default };
//# sourceMappingURL=Wrapper.js.map
