"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=Select.stories.js.map