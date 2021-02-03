import React from "react";
import classNames from "classnames";

import s from "./Button.module.css";

export type ButtonProps = {
  type?: "primary" | "secondary" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "sm",
  onClick,
  children,
}) => {
  return (
    <button className={classNames(s.root, s[type], s[size])} onClick={onClick}>
      {children}
    </button>
  );
};
