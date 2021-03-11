import React from "react";
interface ISelectItem {
    value: string;
    label: string;
}
declare type SelectCommonProps = {
    options: ISelectItem[];
    onChange?: (event: any) => void;
};
export declare const SelectCommon: React.FC<SelectCommonProps>;
export {};
