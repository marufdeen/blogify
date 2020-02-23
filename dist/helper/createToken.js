"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var secret = process.env.JWT_KEY;

var createToken = function createToken(userData) {
  var token = _jsonwebtoken["default"].sign({
    userId: userData.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    profile: userData.profile,
    role: function () {
      return userData.role === 1 ? 'Admin' : 'User';
    }()
  }, secret, {
    expiresIn: '1h'
  });

  return token;
};

exports.createToken = createToken;
var _default = createToken;
exports["default"] = _default;