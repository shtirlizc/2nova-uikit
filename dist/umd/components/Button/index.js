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
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Button = void 0;

  var _propTypes = _interopRequireDefault();

  var _react = _interopRequireDefault();

  var _classnames = _interopRequireDefault();

  var _ButtonModule = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Button = function Button(_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === void 0 ? "primary" : _ref$type,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? "sm" : _ref$size,
        onClick = _ref.onClick,
        children = _ref.children;
    return /*#__PURE__*/_react.default.createElement("button", {
      className: (0, _classnames.default)(_ButtonModule.default.root, _ButtonModule.default[type], _ButtonModule.default[size]),
      onClick: onClick
    }, children);
  };

  exports.Button = Button;
  Button.propTypes = {
    type: _propTypes.default.oneOf(["primary", "secondary", "outlined"]),
    size: _propTypes.default.oneOf(["sm", "md", "lg", "xl"]),
    onClick: _propTypes.default.func
  };
});
//# sourceMappingURL=index.js.map