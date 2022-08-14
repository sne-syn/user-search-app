import React, { FC } from "react";

interface ButtonProps {
  label: string;
  style?: React.CSSProperties;
  handleClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button";
}

const Button: FC<ButtonProps> = ({
  label,
  style,
  handleClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      style={style}
      className="dse-button__container"
      type={type}
      onClick={() => handleClick && handleClick()}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
