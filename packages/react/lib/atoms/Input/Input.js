import React, { useState } from 'react';

const Input = ({ query }) => {
    const [value, setValue] = useState(query);
    const handleInputChange = (evt) => {
        setValue(evt.target.value);
    };
    return (React.createElement("fieldset", { className: "dse-input" },
        React.createElement("label", { className: "dse-visually-hidden", htmlFor: "query" }, "Search"),
        React.createElement("input", { className: `dse-input-field ${value ? "dse-input__field--xs" : ""}`, onChange: (evt) => handleInputChange(evt), value: value ? value : "", id: "query", type: "text", name: "query", placeholder: "Search GitHub username\u2026" })));
};

export { Input as default };
//# sourceMappingURL=Input.js.map
