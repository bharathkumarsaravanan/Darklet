import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  styles?: object;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "dark" | "light" | "outline";
  size?: "small" | "medium" | "large";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  styles={},
  onClick=()=> {},
  disabled=false,
  variant="dark",
  size="medium",
  ...rest
}) => {
  return (
    <button
      style={styles}
      onClick={onClick}
      disabled={disabled}
      className={`darklet--button ${variant} ${size}`}
      {...rest}
    >
      {children}
    </button>
  );
};


