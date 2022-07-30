import React, { FC } from "react";
import sunIcon from "../../assets/icon-sun.svg";
import moonIcon from "../../assets/icon-moon.svg";
const togglerInterface = {
  DARK: {
    icon: sunIcon,
    text: "light",
    alt: "White sun",
  },
  LIGHT: {
    icon: moonIcon,
    text: "dark",
    alt: "Dark moon",
  },
};

interface ThemeTogglerProps {
  theme: string;
}

const ThemeToggler: FC<ThemeTogglerProps> = ({ theme }) => {
  const isDark = theme === "dark";
  console.log(theme);
  return (
    <button
      className={`dse-theme ${isDark ? "dse-theme--dark" : "dse-theme--light"}`}
    >
      <span className="dse-theme-text">
        {!isDark ? togglerInterface.LIGHT.text : togglerInterface.DARK.text}
      </span>
      <img
        src={!isDark ? togglerInterface.LIGHT.icon : togglerInterface.DARK.icon}
        alt={!isDark ? togglerInterface.LIGHT.alt : togglerInterface.DARK.alt}
        style={{ width: "20px" }}
      />
    </button>
  );
};

export default ThemeToggler;
