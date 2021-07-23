import React from "react";
import { Rating } from "./index";

const RatingStory = {
  title: "Rating",
  component: Rating,
};

export const Basic = () => (
  <Rating
    name="rating"
    onChange={(evt) => {
      console.log(evt);
    }}
  />
);

export default RatingStory;
