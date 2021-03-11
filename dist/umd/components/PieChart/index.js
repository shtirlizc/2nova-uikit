(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "./PieChart.module.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("./PieChart.module.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.PieChartModule);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PieChart = void 0;

  var _propTypes = _interopRequireDefault();

  var _react = _interopRequireWildcard();

  var _PieChartModule = _interopRequireDefault();

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var PieChart = function PieChart(_ref) {
    var progress = _ref.progress,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? 120 : _ref$size,
        _ref$strokeWidth = _ref.strokeWidth,
        strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth,
        _ref$circleOneStroke = _ref.circleOneStroke,
        circleOneStroke = _ref$circleOneStroke === void 0 ? "#d3d9de" : _ref$circleOneStroke,
        _ref$circleTwoStroke = _ref.circleTwoStroke,
        circleTwoStroke = _ref$circleTwoStroke === void 0 ? "#ffc400" : _ref$circleTwoStroke,
        children = _ref.children;
    var center = size / 2;
    var radius = size / 2 - strokeWidth / 2;
    var circumference = 2 * Math.PI * radius;
    var circleRef = (0, _react.useRef)(null);

    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        offset = _useState2[0],
        setOffset = _useState2[1];

    (0, _react.useEffect)(function () {
      var progressOffset = (100 - progress) / 100 * circumference;
      setOffset(progressOffset);
    }, [setOffset, circumference, progress, offset]);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _PieChartModule.default.root
    }, /*#__PURE__*/_react.default.createElement("svg", {
      className: _PieChartModule.default.svg,
      width: size,
      height: size
    }, /*#__PURE__*/_react.default.createElement("circle", {
      className: _PieChartModule.default.circleBg,
      stroke: circleOneStroke,
      cx: center,
      cy: center,
      r: radius,
      strokeWidth: strokeWidth
    }), /*#__PURE__*/_react.default.createElement("circle", {
      ref: circleRef,
      className: _PieChartModule.default.circle,
      stroke: circleTwoStroke,
      cx: center,
      cy: center,
      r: radius,
      strokeWidth: strokeWidth,
      strokeDasharray: circumference,
      strokeDashoffset: offset
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: _PieChartModule.default.text
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: _PieChartModule.default.textProgress
    }, progress, "%"), children && /*#__PURE__*/_react.default.createElement("p", {
      className: _PieChartModule.default.textDescription
    }, children)));
  };

  exports.PieChart = PieChart;
  PieChart.propTypes = {
    progress: _propTypes.default.number.isRequired,
    size: _propTypes.default.number,
    strokeWidth: _propTypes.default.number,
    circleOneStroke: _propTypes.default.string,
    circleTwoStroke: _propTypes.default.string
  };
});
//# sourceMappingURL=index.js.map