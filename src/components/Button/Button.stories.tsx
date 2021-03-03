import React from "react";
import { Button } from "./index";

const ButtonStory = {
  title: "Button",
  component: Button,
};

export const Basic = () => <Button>Button</Button>;

export const Secondary = () => <Button type="secondary">Button</Button>;

export const Large = () => <Button size="lg">Button</Button>;

export const FullWidth = () => (
  <div style={{ maxWidth: 400 }}>
    <Button fullWidth>Button</Button>
  </div>
);

export default ButtonStory;
