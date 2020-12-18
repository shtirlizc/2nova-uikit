import _pt from "prop-types";
import React from "react";
import classNames from "classnames";
import s from "./Button.module.css";

const Button = ({
  type = "primary",
  size = "sm",
  children
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: classNames(s.root, s[type], s[size])
  }, children);
};

Button.propTypes = {
  type: _pt.oneOf(["primary", "secondary", "outlined"]),
  size: _pt.oneOf(["sm", "md", "lg", "xl"])
};
export default Button;
//# sourceMappingURL=index.js.map