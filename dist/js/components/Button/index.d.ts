import React from "react";
export declare type ButtonProps = {
    type?: "primary" | "secondary" | "outlined";
    size?: "sm" | "md" | "lg" | "xl";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare const Button: React.FC<ButtonProps>;
