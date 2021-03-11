(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Button", "./PieChart", "./Select", "./Table", "./BarChart"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Button"), require("./PieChart"), require("./Select"), require("./Table"), require("./BarChart"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Button, global.PieChart, global.Select, global.Table, global.BarChart);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Button, _PieChart, _Select, _Table, _BarChart) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Button).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _Button[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _Button[key];
      }
    });
  });
  Object.keys(_PieChart).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _PieChart[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _PieChart[key];
      }
    });
  });
  Object.keys(_Select).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _Select[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _Select[key];
      }
    });
  });
  Object.keys(_Table).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _Table[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _Table[key];
      }
    });
  });
  Object.keys(_BarChart).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _BarChart[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _BarChart[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map