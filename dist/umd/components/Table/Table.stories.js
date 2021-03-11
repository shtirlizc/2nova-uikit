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
    title: "Table",
    component: _index.Table
  };
  var columns = [{
    id: 1,
    field: "address",
    headerName: "Адрес"
  }, {
    id: 2,
    field: "total",
    headerName: "Зарегистрированы / Всего"
  }, {
    id: 3,
    field: "plan",
    headerName: "Факт / План по переводам"
  }, {
    id: 4,
    field: "active",
    headerName: "Активный статус"
  }, {
    id: 5,
    field: "process",
    headerName: "Совершают переводы"
  }];
  var rows = [{
    id: 1,
    address: "3891 Ranchview Dr. Richardson, California 62639",
    total: "10/20",
    plan: "10/20",
    active: "8",
    process: "19"
  }, {
    id: 2,
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    total: "10/20",
    plan: "10/20",
    active: "19",
    process: "13"
  }, {
    id: 3,
    address: "3891 Ranchview Dr. Richardson, California 62639",
    total: "10/20",
    plan: "10/20",
    active: "17",
    process: "12"
  }];

  var Basic = function Basic() {
    return /*#__PURE__*/_react.default.createElement(_index.Table, {
      columns: columns,
      rows: rows
    });
  };

  exports.Basic = Basic;
  var _default = SelectStory;
  exports.default = _default;
});
//# sourceMappingURL=Table.stories.js.map