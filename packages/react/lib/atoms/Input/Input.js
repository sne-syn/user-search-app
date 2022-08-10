import React, { useState } from 'react';
import img from '../../assets/icon-search.svg.js';

const Input = ({ query }) => {
    const [value, setValue] = useState(query);
    const handleInputChange = (evt) => {
        setValue(evt.target.value);
    };
    return (React.createElement("fieldset", { className: "dse-fieldset" },
        React.createElement("img", { className: "dse-fieldset__icon", src: img, alt: "Search user" }),
        React.createElement("label", { className: "dse-visually-hidden", htmlFor: "query" }, "Search"),
        React.createElement("input", { className: `dse-fieldset__input ${value ? "dse-fieldset__input--xs" : ""}`, onChange: (evt) => handleInputChange(evt), value: value ? value : "", id: "query", type: "text", name: "query", placeholder: "Search GitHub username\u2026" })));
};

export { Input as default };
//# sourceMappingURL=Input.js.map
