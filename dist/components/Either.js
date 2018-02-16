'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Either = function Either(_ref) {
  var children = _ref.children,
      left = _ref.left,
      of = _ref.of,
      right = _ref.right;
  return of ? right({ children: children }) : left({ children: children });
};

Either.propTypes = {
  children: _propTypes2.default.any,
  left: _propTypes2.default.func,
  of: _propTypes2.default.any,
  right: _propTypes2.default.func
};

Either.defaultProps = {
  left: function left(_ref2) {
    var children = _ref2.children;
    return null;
  },
  right: function right(_ref3) {
    var children = _ref3.children;
    return null;
  }
};

exports.default = Either;