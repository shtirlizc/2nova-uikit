"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BarChart = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _g = require("@antv/g2");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarChart = function BarChart(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 300 : _ref$height,
      container = _ref.container,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? ["#FFDD00", "#D3D9DE"] : _ref$colors;
  var chart;
  (0, _react.useEffect)(function () {
    if (!chart) return;
    chart.changeData(data);
  }, [data]);
  (0, _react.useEffect)(function () {
    if (chart) {
      chart.destroy();
    }

    chart = new _g.Chart({
      container: container || "chart",
      height: height,
      autoFit: true,
      width: 615
    });
    chart.scale("value", {
      alias: "Количество",
      nice: true
    });
    chart.data(data);
    chart.axis("value", {
      title: {
        offset: 30
      },
      tickLine: {
        style: {
          stroke: "#D3D9DE"
        }
      },
      line: {
        style: {
          stroke: "#D3D9DE"
        }
      },
      grid: {
        line: {
          type: "line",
          style: {
            lineDash: [2]
          }
        }
      }
    });
    chart.interval().position("name*value").color("type", colors).adjust("stack").label("value", function (val) {
      return {
        position: "middle",
        offset: 0,
        content: function content(originData) {
          if (originData.value > 0) {
            return originData.value;
          }

          return "";
        },
        style: {
          fill: "#5E7080"
        }
      };
    });
    chart.legend({
      position: "bottom"
    });
    chart.render();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "chart"
  });
};

exports.BarChart = BarChart;
BarChart.propTypes = {
  height: _propTypes.default.number,
  data: _propTypes.default.arrayOf(_propTypes.default.any).isRequired,
  container: _propTypes.default.string,
  colors: _propTypes.default.arrayOf(_propTypes.default.string)
};
//# sourceMappingURL=index.js.map