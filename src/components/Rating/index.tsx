import React, { useState } from "react";
import classNames from "classnames";

import { ReactComponent as StarIcon } from "./assets/star.svg";
import s from "./Rating.module.css";

const stars = ["1", "2", "3", "4", "5"];

export type RatingProps = {
  name: string;
  onChange: (event: string) => void;
};

export const Rating: React.FC<RatingProps> = ({ name, onChange }) => {
  const [value, setValue] = useState(stars[0]);

  const handleChangeRating = (evt: React.FormEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;

    setValue(value);
    onChange(value);
  };

  return (
    <form className={s.root}>
      {stars.map((el, idx) => (
        <div
          key={`key-${name}-${idx}`}
          className={classNames(s.star, Number(value) > idx && s.active)}
        >
          <input
            type="radio"
            id={`id-${name}-${idx}`}
            name={name}
            checked={el === value}
            value={el}
            onChange={handleChangeRating}
          />
          <label htmlFor={`id-${name}-${idx}`}>
            <StarIcon />
          </label>
        </div>
      ))}
    </form>
  );
};
