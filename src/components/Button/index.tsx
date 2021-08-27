import React from "react";
import classNames from "classnames";
import { ReactComponent as Preloader } from "./assets/loading.svg";

import s from "./Button.module.scss";

export type ButtonProps = {
  type?: "primary" | "secondary" | "outlined" | "outlined-light";
  size?: "sm" | "md" | "lg" | "xl";
  role?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "md",
  role = "button",
  fullWidth = false,
  isLoading = false,
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      type={role}
      className={classNames(
        s.root,
        s[type],
        s[size],
        fullWidth && s.fullWidth,
        isLoading && s.isLoading,
        disabled && s.disabled
      )}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading && <Preloader />}
      {children}
    </button>
  );
};
