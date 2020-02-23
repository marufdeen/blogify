"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var secret = process.env.JWT_KEY;

var verifyToken = function verifyToken(req, res, next) {
  var header = req.headers.Authorization || req.headers.authorization || req.query.Authorization;

  if (typeof header !== 'undefined') {
    try {
      var token = header;
      req.decoded = _jsonwebtoken["default"].verify(token, secret);
      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Auth failed'
      });
    }
  } else {
    return res.status(401).json({
      message: 'Token not provided'
    });
  }
};

var _default = verifyToken;
exports["default"] = _default;