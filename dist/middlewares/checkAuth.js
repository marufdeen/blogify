"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUserAdmin = exports.isUserValid = void 0;

var _models = require("../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isUserValid = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, res, next) {
    var userId, userFound;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref.decoded.userId;
            _context.next = 3;
            return _models.User.findOne({
              where: {
                id: userId
              }
            });

          case 3:
            userFound = _context.sent;

            if (!userFound) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", next());

          case 6:
            return _context.abrupt("return", res.status(404).json({
              message: 'Login First'
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function isUserValid(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isUserValid = isUserValid;

var isUserAdmin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3, res, next) {
    var userId, userFound;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = _ref3.decoded.userId;
            _context2.next = 3;
            return _models.User.findOne({
              where: {
                id: userId
              }
            });

          case 3:
            userFound = _context2.sent;

            if (!(userFound.role === 1)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", next());

          case 6:
            return _context2.abrupt("return", res.status(401).json({
              message: 'Only Admin is allowed!'
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isUserAdmin(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.isUserAdmin = isUserAdmin;