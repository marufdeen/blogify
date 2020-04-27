"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateProfile = exports.validateEdit = exports.validateSignin = exports.validateSignup = void 0;

var _userValidations = _interopRequireDefault(require("../helper/userValidations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint radix: ["error", "as-needed"] */
var validateSignup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var errors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _userValidations["default"].signupValidations(req.body);

          case 2:
            errors = _context.sent;

            if (!(Object.keys(errors).length > 0)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              errors: errors
            }));

          case 5:
            return _context.abrupt("return", next());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validateSignup(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.validateSignup = validateSignup;

var validateSignin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var errors;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _userValidations["default"].signinValidations(req.body);

          case 2:
            errors = _context2.sent;

            if (!(Object.keys(errors).length > 0)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              errors: errors
            }));

          case 5:
            return _context2.abrupt("return", next());

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function validateSignin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.validateSignin = validateSignin;

var validateEdit = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var userId, errors;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userId = parseInt(req.decoded.userId);
            _context3.next = 3;
            return _userValidations["default"].editValidations(req.body, userId);

          case 3:
            errors = _context3.sent;

            if (!errors[0]) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(401).json({
              errors: errors
            }));

          case 6:
            return _context3.abrupt("return", next());

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function validateEdit(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.validateEdit = validateEdit;

var validateProfile = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var userId, errors;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            userId = parseInt(req.decoded.userId);
            _context4.next = 3;
            return _userValidations["default"].profileValidation(req.body, userId);

          case 3:
            errors = _context4.sent;

            if (!errors[0]) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(401).json({
              errors: errors
            }));

          case 6:
            return _context4.abrupt("return", next());

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function validateProfile(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.validateProfile = validateProfile;