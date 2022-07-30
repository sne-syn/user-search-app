import React, { FC } from "react";

interface ButtonProps {
  label: string;
}
const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <button className="dse-button__container" type="submit">
      {label}
    </button>
  );
};

export default Button;
