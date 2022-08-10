import React from 'react';

const Link = ({ link }) => {
    const linkName = link ? link : "Not available";
    return (React.createElement("a", { href: "", className: "dse-link", target: "_blank", rel: "noreferrer" }, linkName));
};

export { Link as default };
//# sourceMappingURL=Link.js.map
