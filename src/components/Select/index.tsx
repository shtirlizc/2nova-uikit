import React from "react";
import Select from "react-select";

import s from "./Select.module.css";

interface IStyles {
  isFocused?: boolean;
  isSelected?: boolean;
}

const styles = {
  control: (styles: object, { isFocused }: IStyles) => ({
    ...styles,
    boxShadow: isFocused ? "0 0 0 1px #ffdd00" : "none",
    border: isFocused
      ? "1px solid #ffdd00 !important"
      : "1px solid #2c343c !important",
    borderRadius: 2,
    height: 32,
    paddingTop: 1,
  }),
  option: (styles: object, { isSelected, isFocused }: IStyles) => ({
    ...styles,
    fontSize: 12,
    color: "#2c343c",
    backgroundColor: isSelected ? "#ffdd00" : isFocused ? "#ffdd0050" : "white",
    paddingTop: 12,
    cursor: "pointer",
  }),
  input: (styles: object) => ({
    ...styles,
    fontSize: 12,
    color: "#2c343c",
  }),
  placeholder: (styles: object) => ({
    ...styles,
    fontSize: 12,
    color: "#2c343c",
  }),
  singleValue: (styles: object) => ({
    ...styles,
    fontSize: 12,
    color: "#2c343c",
  }),
  indicatorSeparator: (styles: object) => ({ ...styles, display: "none" }),
};

interface ISelectItem {
  value: string | number;
  label: string;
}

type SelectCommonProps = {
  options: ISelectItem[];
  defaultValue?: ISelectItem;
  placeholder?: string;
  onChange?: (event: any) => void;
};

export const SelectCommon: React.FC<SelectCommonProps> = ({
  options,
  defaultValue,
  placeholder,
  onChange,
}) => {
  return (
    <div className={s.root}>
      <Select
        styles={styles}
        options={options}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
