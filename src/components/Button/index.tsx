import React from "react";
import classNames from "classnames";
import { ReactComponent as Preloader } from "./loading.svg";

import s from "./Button.module.css";

export type ButtonProps = {
  type?: "primary" | "secondary" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
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
