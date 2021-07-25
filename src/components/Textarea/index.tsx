import React from "react";
import classNames from "classnames";

import s from "./Textarea.module.css";

export type TextareaProps = {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
}) => {
  return (
    <div className={s.root}>
      <div
        className={classNames(s.field, value && s.active, error && s.hasError)}
      >
        <div className={s.fieldContent}>{value}</div>
        <textarea name={name} id={id} value={value} onChange={onChange} />
        <label htmlFor={id}>{placeholder}</label>
      </div>
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
