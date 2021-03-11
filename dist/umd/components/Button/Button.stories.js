(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./index", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./index"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.index, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.Large = exports.Secondary = exports.Basic = void 0;

  var _react = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ButtonStory = {
    title: "Button",
    component: _index.Button
  };

  var Basic = function Basic() {
    return /*#__PURE__*/_react.default.createElement(_index.Button, null, "Button");
  };

  exports.Basic = Basic;

  var Secondary = function Secondary() {
    return /*#__PURE__*/_react.default.createElement(_index.Button, {
      type: "secondary"
    }, "Button");
  };

  exports.Secondary = Secondary;

  var Large = function Large() {
    return /*#__PURE__*/_react.default.createElement(_index.Button, {
      size: "lg"
    }, "Button");
  };

  exports.Large = Large;
  var _default = ButtonStory;
  exports.default = _default;
});
//# sourceMappingURL=Button.stories.js.map