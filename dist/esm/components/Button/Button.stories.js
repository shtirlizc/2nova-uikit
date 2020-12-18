import React from "react";
import Button from "./index";
const ButtonStory = {
  title: "Button",
  component: Button
};
export const Basic = () => /*#__PURE__*/React.createElement(Button, null, "Button");
export const Secondary = () => /*#__PURE__*/React.createElement(Button, {
  type: "secondary"
}, "Button");
export const Large = () => /*#__PURE__*/React.createElement(Button, {
  size: "lg"
}, "Button");
export default ButtonStory;
//# sourceMappingURL=Button.stories.js.map