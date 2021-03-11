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
  exports.default = exports.Basic = void 0;

  var _react = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var SelectStory = {
    title: "Select",
    component: _index.SelectCommon
  };

  var Basic = function Basic() {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: 400
      }
    }, /*#__PURE__*/_react.default.createElement(_index.SelectCommon, {
      options: [{
        value: "chocolate",
        label: "Chocolate"
      }, {
        value: "strawberry",
        label: "Strawberry"
      }, {
        value: "vanilla",
        label: "Vanilla"
      }]
    }));
  };

  exports.Basic = Basic;
  var _default = SelectStory;
  exports.default = _default;
});
//# sourceMappingURL=Select.stories.js.map