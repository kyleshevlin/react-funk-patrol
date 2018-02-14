'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Either = function Either(_ref) {
  var left = _ref.left,
      of = _ref.of,
      right = _ref.right;
  return of ? right() : left();
};

Either.defaultProps = {
  left: function left() {
    return null;
  },
  right: function right() {
    return null;
  }
};

exports.default = Either;