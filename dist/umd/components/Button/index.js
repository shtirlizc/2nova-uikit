(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "classnames", "./Button.module.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("classnames"), require("./Button.module.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.classnames, global.ButtonModule);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _classnames, _ButtonModule) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _ButtonModule2 = _interopRequireDefault(_ButtonModule);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Button = ({
    type = "primary",
    size = "sm",
    children
  }) => {
    return /*#__PURE__*/_react2.default.createElement("button", {
      className: (0, _classnames2.default)(_ButtonModule2.default.root, _ButtonModule2.default[type], _ButtonModule2.default[size])
    }, children);
  };

  Button.propTypes = {
    type: _propTypes2.default.oneOf(["primary", "secondary", "outlined"]),
    size: _propTypes2.default.oneOf(["sm", "md", "lg", "xl"])
  };
  exports.default = Button;
});
//# sourceMappingURL=index.js.map