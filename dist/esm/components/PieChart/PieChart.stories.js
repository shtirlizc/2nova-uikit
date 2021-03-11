"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PieChartStory = {
  title: "PieChart",
  component: _index.PieChart
};

var Basic = function Basic() {
  return /*#__PURE__*/_react.default.createElement(_index.PieChart, {
    progress: 75
  }, "\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u0437\u0430\u0440\u0435\u0433-\u043D\u043E");
};

exports.Basic = Basic;
var _default = PieChartStory;
exports.default = _default;
//# sourceMappingURL=PieChart.stories.js.map