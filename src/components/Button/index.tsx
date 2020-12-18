import React from "react";
import classNames from "classnames";

import s from "./Button.module.css";

export type ButtonProps = {
  type?: "primary" | "secondary" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
};

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "sm",
  children,
}) => {
  return (
    <button className={classNames(s.root, s[type], s[size])}>{children}</button>
  );
};
