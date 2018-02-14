'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Maybe = function Maybe(_ref) {
  var children = _ref.children,
      nothing = _ref.nothing,
      of = _ref.of;
  return !(0, _utils.isNothing)(of) ? children : nothing ? nothing() : null;
};

Maybe.defaultProps = {
  nothing: function nothing() {
    return null;
  }
};

exports.default = Maybe;