import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  styles?: object;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "outline" | "filled" | "invert" | "danger";
  size?: "small" | "medium" | "large";
};

export const Button = ({
  children,
  styles={},
  onClick=()=> {},
  disabled=false,
  variant="filled",
  size="medium",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      style={styles}
      onClick={onClick}
      disabled={disabled}
      className={`darklet--button ${variant} ${size}`}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};


