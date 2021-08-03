import React, { useState } from "react";
import { Rating, RatingValueType } from "./index";

const RatingStory = {
  title: "Rating",
  component: Rating,
};

export const Basic = () => {
  const [value, setValue] = useState<RatingValueType | string>("");
  const handleValue = (evt: string | RatingValueType) => {
    setValue(evt);
  };

  return <Rating name="rating" value={value} onChange={handleValue} />;
};

export default RatingStory;
