(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "react-select", "./Select.module.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("react-select"), require("./Select.module.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactSelect, global.SelectModule);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SelectCommon = void 0;

  var _propTypes = _interopRequireDefault();

  var _react = _interopRequireDefault();

  var _reactSelect = _interopRequireDefault();

  var _SelectModule = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var styles = {
    control: function control(styles, _ref) {
      var isFocused = _ref.isFocused;
      return _objectSpread(_objectSpread({}, styles), {}, {
        boxShadow: isFocused ? "0 0 0 1px #ffdd00" : "none",
        border: isFocused ? "1px solid #ffdd00 !important" : "1px solid #2c343c !important",
        borderRadius: 2,
        height: 32,
        paddingTop: 1
      });
    },
    option: function option(styles, _ref2) {
      var isSelected = _ref2.isSelected,
          isFocused = _ref2.isFocused;
      return _objectSpread(_objectSpread({}, styles), {}, {
        fontSize: 12,
        color: "#2c343c",
        backgroundColor: isSelected ? "#ffdd00" : isFocused ? "#ffdd0050" : "white",
        paddingTop: 12,
        cursor: "pointer"
      });
    },
    input: function input(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        fontSize: 12,
        color: "#2c343c"
      });
    },
    placeholder: function placeholder(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        fontSize: 12,
        color: "#2c343c"
      });
    },
    singleValue: function singleValue(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        fontSize: 12,
        color: "#2c343c"
      });
    },
    indicatorSeparator: function indicatorSeparator(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        display: "none"
      });
    }
  };

  var SelectCommon = function SelectCommon(_ref3) {
    var options = _ref3.options,
        onChange = _ref3.onChange;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _SelectModule.default.root
    }, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
      styles: styles,
      options: options,
      onChange: onChange
    }));
  };

  exports.SelectCommon = SelectCommon;
  SelectCommon.propTypes = {
    options: _propTypes.default.arrayOf(_propTypes.default.shape({
      value: _propTypes.default.string.isRequired,
      label: _propTypes.default.string.isRequired
    })).isRequired,
    onChange: _propTypes.default.func
  };
});
//# sourceMappingURL=index.js.map