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
  exports.default = exports.BarChart = void 0;

  var _react = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var BarChartStory = {
    title: "BarChart",
    component: _index.BarChart
  };
  var departments = [{
    id: 11568,
    name: 'Героев Труда ул., 39',
    city: 'Усть-Илимск',
    organisation: 'Почта России',
    plan_fact: 0,
    plan_count: 1,
    plan_date: 'Февраль',
    exists: 1,
    registered_operators: [],
    unregistered_operators: [1234, 123456]
  }, {
    id: 1946,
    name: '50 лет ВЛКСМ ул., 16',
    city: 'Усть-Илимск',
    organisation: 'Почта России',
    plan_fact: 0,
    plan_count: 1,
    plan_date: 'Февраль',
    exists: 1,
    registered_operators: [],
    unregistered_operators: [123, 1234, 12345]
  }];
  var data = departments.reduce(function (acc, cur) {
    acc.push({
      name: cur.name,
      type: 'Зарегистрированные',
      value: cur.registered_operators.length
    });
    acc.push({
      name: cur.name,
      type: 'Незарегистрированные',
      value: cur.unregistered_operators.length
    });
    return acc;
  }, []);

  var BarChart = function BarChart() {
    return /*#__PURE__*/_react.default.createElement(_index.BarChart, {
      colors: ['#26ADE4', '#D3D9DE'],
      data: data,
      height: 300
    });
  };

  exports.BarChart = BarChart;
  var _default = BarChartStory;
  exports.default = _default;
});
//# sourceMappingURL=BarChart.stories.js.map