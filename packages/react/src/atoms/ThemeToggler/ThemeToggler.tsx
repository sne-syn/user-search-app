import React, { FC, useState } from "react";
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
  defaultTheme: "dark" | "light";
}

const ThemeToggler: FC<ThemeTogglerProps> = ({ defaultTheme }) => {
  const [themeButton, setThemeButton] = useState(defaultTheme);

  const handleThemeButtonChange = () => {
    if (themeButton === "dark") {
      setThemeButton("light");
    } else {
      setThemeButton("dark");
    }
  };

  return (
    <button
      className={`dse-theme ${
        themeButton === "dark" ? "dse-theme--dark" : "dse-theme--light"
      }`}
      onClick={handleThemeButtonChange}
    >
      <span className="dse-theme-text">
        {themeButton !== "dark"
          ? togglerInterface.LIGHT.text
          : togglerInterface.DARK.text}
      </span>
      <img
        src={
          themeButton !== "dark"
            ? togglerInterface.LIGHT.icon
            : togglerInterface.DARK.icon
        }
        alt={
          themeButton !== "dark"
            ? togglerInterface.LIGHT.alt
            : togglerInterface.DARK.alt
        }
        style={{ width: "20px" }}
      />
    </button>
  );
};

export default ThemeToggler;
