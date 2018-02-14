'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Either = require('./components/Either');

var _Either2 = _interopRequireDefault(_Either);

var _Maybe = require('./components/Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Either: _Either2.default,
  Maybe: _Maybe2.default
};