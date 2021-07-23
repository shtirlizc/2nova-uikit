import React from "react";

import s from "./Checkbox.module.css";

export type CheckboxProps = {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  value,
  checked = false,
  disabled = false,
  required = false,
  autoFocus = false,
  onChange,
  children,
}) => {
  return (
    <div className={s.root}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        onChange={onChange}
      />
      <label htmlFor={id}>{children}</label>
      <span className={s.checkboxWave} />
    </div>
  );
};
