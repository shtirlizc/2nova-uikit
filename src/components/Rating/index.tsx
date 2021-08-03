import React from "react";
import classNames from "classnames";

import { ReactComponent as StarIcon } from "./assets/star.svg";
import s from "./Rating.module.css";

const stars = ["1", "2", "3", "4", "5"];

export enum RatingValueType {
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
}

export type RatingProps = {
  name: string;
  value: RatingValueType | string;
  onChange: (event: RatingValueType | string) => void;
};

export const Rating: React.FC<RatingProps> = ({ name, value, onChange }) => {
  const handleChangeRating = (evt: React.FormEvent<HTMLInputElement>) => {
    onChange(evt.currentTarget.value);
  };

  return (
    <form className={s.root}>
      {stars.map((el) => {
        const key = `key-${name}-${el}`;
        const id = `id-${name}-${el}`;

        return (
          <div
            key={key}
            className={classNames(
              s.star,
              Number(value) >= Number(el) && s.active
            )}
          >
            <input
              type="radio"
              id={id}
              name={name}
              checked={Number(value) === Number(el)}
              value={el}
              onChange={handleChangeRating}
            />
            <label htmlFor={id}>
              <StarIcon />
            </label>
          </div>
        );
      })}
    </form>
  );
};
