(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.index);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Large = exports.Secondary = exports.Basic = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const ButtonStory = {
    title: "Button",
    component: _index2.default
  };

  const Basic = exports.Basic = () => /*#__PURE__*/_react2.default.createElement(_index2.default, null, "Button");

  const Secondary = exports.Secondary = () => /*#__PURE__*/_react2.default.createElement(_index2.default, {
    type: "secondary"
  }, "Button");

  const Large = exports.Large = () => /*#__PURE__*/_react2.default.createElement(_index2.default, {
    size: "lg"
  }, "Button");

  exports.default = ButtonStory;
});
//# sourceMappingURL=Button.stories.js.map