import React from 'react';

const VisuallyHidden = ({ tagName, content }) => {
    const CustomTag = tagName;
    return React.createElement(CustomTag, { className: "dse-visually-hidden" }, content);
};

export { VisuallyHidden as default };
//# sourceMappingURL=VisuallyHidden.js.map
