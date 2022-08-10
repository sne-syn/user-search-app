import React from 'react';
import img from '../../assets/icon-sun.svg.js';
import img$1 from '../../assets/icon-moon.svg.js';

const togglerInterface = {
    DARK: {
        icon: img,
        text: "light",
        alt: "White sun",
    },
    LIGHT: {
        icon: img$1,
        text: "dark",
        alt: "Dark moon",
    },
};
const ThemeToggler = ({ theme }) => {
    const isDark = theme === "dark";
    return (React.createElement("button", { className: `dse-theme ${isDark ? "dse-theme--dark" : "dse-theme--light"}` },
        React.createElement("span", { className: "dse-theme-text" }, !isDark ? togglerInterface.LIGHT.text : togglerInterface.DARK.text),
        React.createElement("img", { src: !isDark ? togglerInterface.LIGHT.icon : togglerInterface.DARK.icon, alt: !isDark ? togglerInterface.LIGHT.alt : togglerInterface.DARK.alt, style: { width: "20px" } })));
};

export { ThemeToggler as default };
//# sourceMappingURL=ThemeToggler.js.map
