import React from "react";

import s from "./Radio.module.scss";

export type RadioProps = {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

export const Radio: React.FC<RadioProps> = ({
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
        type="radio"
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
      <span className={s.radioWave} />
    </div>
  );
};
