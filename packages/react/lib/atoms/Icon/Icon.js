import React from 'react';

const Icon = ({ iconData }) => {
    const transparencyClass = iconData.hasValue === false ? "dse-icon--transparent" : "";
    return (React.createElement("img", { className: `dse-icon ${transparencyClass}`, src: `./assets/${iconData.src}.svg`, alt: iconData.description }));
};

export { Icon as default };
//# sourceMappingURL=Icon.js.map
