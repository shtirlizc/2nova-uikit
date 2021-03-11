(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components", "./index.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components"), require("./index.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.components, global.index);
    global.undefined = mod.exports;
  }
})(this, function (exports, _components) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_components).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _components[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _components[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map