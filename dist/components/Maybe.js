'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Maybe = function Maybe(_ref) {
  var children = _ref.children,
      nothing = _ref.nothing,
      of = _ref.of,
      something = _ref.something;
  return !(0, _utils.isNothing)(of) ? something({ children: children }) : nothing({ children: children });
};

Maybe.propTypes = {
  children: _propTypes2.default.any,
  nothing: _propTypes2.default.func,
  of: _propTypes2.default.any,
  something: _propTypes2.default.func
};

Maybe.defaultProps = {
  nothing: function nothing() {
    return null;
  },
  something: function something() {
    return null;
  }
};

exports.default = Maybe;