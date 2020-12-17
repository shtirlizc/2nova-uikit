import React from "react";
import classNames from "classnames";

import s from "./Button.module.css";

export type ButtonProps = {
  type?: "primary" | "secondary" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
};

const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "md",
  children,
}) => {
  return (
    <button className={classNames(s.root, s[type], s[size])}>{children}</button>
  );
};

export default Button;
