import React from "react";

import s from "./Form.module.scss";

export type FormProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form: React.FC<FormProps> = ({
  onSubmit = () => {},
  children,
}) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit(evt);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export const FormGroup: React.FC = ({ children }) => {
  return <div className={s.formGroup}>{children}</div>;
};
