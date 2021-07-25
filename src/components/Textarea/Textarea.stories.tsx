import React, { useState } from "react";
import { Textarea } from "./index";

const TextareaStory = {
  title: "Textarea",
  component: Textarea,
};

export const Basic = () => {
  const [value, setValue] = useState("");

  const handleChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(evt.currentTarget.value);
  };

  return (
    <Textarea
      id="textarea"
      name="textarea"
      placeholder="Рассказ"
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextareaStory;
