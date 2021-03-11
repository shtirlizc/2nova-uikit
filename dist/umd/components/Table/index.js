(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "classnames", "./Table.module.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("classnames"), require("./Table.module.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.classnames, global.TableModule);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Table = void 0;

  var _propTypes = _interopRequireDefault();

  var _react = _interopRequireDefault();

  var _classnames = _interopRequireDefault();

  var _TableModule = _interopRequireDefault();

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

  var Table = function Table(_ref) {
    var columns = _ref.columns,
        rows = _ref.rows;
    console.log("###: rows", rows);
    return /*#__PURE__*/_react.default.createElement("table", {
      className: _TableModule.default.table
    }, /*#__PURE__*/_react.default.createElement("thead", {
      className: _TableModule.default.thead
    }, /*#__PURE__*/_react.default.createElement("tr", null, columns.map(function (_ref2) {
      var id = _ref2.id,
          headerName = _ref2.headerName;
      return /*#__PURE__*/_react.default.createElement("th", {
        key: id,
        className: _TableModule.default.th
      }, headerName);
    }))), /*#__PURE__*/_react.default.createElement("tbody", null, rows.map(function (row) {
      var _Object$values = Object.values(row),
          _Object$values2 = _slicedToArray(_Object$values, 1),
          key = _Object$values2[0];

      return /*#__PURE__*/_react.default.createElement("tr", {
        key: key,
        className: _TableModule.default.tr
      }, Object.entries(row).map(function (td, idx) {
        var _td = _slicedToArray(td, 2),
            field = _td[0],
            value = _td[1];

        var _columns$filter = columns.filter(function (col) {
          return col.field === field;
        }),
            _columns$filter2 = _slicedToArray(_columns$filter, 1),
            currentColumn = _columns$filter2[0];

        if (field === "id") {
          return null;
        }

        return /*#__PURE__*/_react.default.createElement("td", {
          key: field,
          className: (0, _classnames.default)(_TableModule.default.td, idx === 1 && _TableModule.default.tdRowName)
        }, /*#__PURE__*/_react.default.createElement("span", null, currentColumn.headerName), value);
      }));
    })));
  };

  exports.Table = Table;
  Table.propTypes = {
    columns: _propTypes.default.arrayOf(_propTypes.default.shape({
      id: _propTypes.default.number.isRequired,
      field: _propTypes.default.string.isRequired,
      headerName: _propTypes.default.string.isRequired
    })).isRequired,
    rows: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
  };
});
//# sourceMappingURL=index.js.map