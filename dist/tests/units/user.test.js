"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _users = _interopRequireDefault(require("../../controllers/users"));

var _userdetails = require("./mockDB/userdetails");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_chai["default"].use(_chaiHttp["default"]);

describe('Test User Controller', function () {
  var req;
  var res;
  beforeEach(function () {
    req = {
      body: {},
      query: {},
      params: {
        userId: 1
      },
      decoded: {
        userId: 1
      }
    };
    res = {
      status: function status() {
        return {
          json: function json(data) {
            return data;
          }
        };
      }
    };
  });
  describe('user Registration', function () {
    it('should return User successfully created', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req.body = _userdetails.signup.complete;
              _context.next = 3;
              return _users["default"].userRegister(req, res);

            case 3:
              result = _context.sent;
              (0, _chai.expect)(result.message).eql('User successfully created');
              (0, _chai.expect)(result).to.have.keys(['message', 'token']); // setImmediate(done);
              // done();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  describe('user Login', function () {
    it.skip('should return Access Granted! if details are correct', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req.body = _userdetails.login.complete.correct;
              _context2.next = 3;
              return _users["default"].userLogin(req, res);

            case 3:
              result = _context2.sent;
              console.log('result: ', result, 'req: ', req);
              (0, _chai.expect)(result.message).to.be.eql('Access Granted!'); // expect(result).to.have.keys(['message', 'token']);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should return Invalid Credentials! if details are incorrect', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req.body = _userdetails.login.complete.incorrect;
              _context3.next = 3;
              return _users["default"].userLogin(req, res);

            case 3:
              result = _context3.sent;
              (0, _chai.expect)(result.message).eql('Invalid Credentials!');

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  describe('Get All Users', function () {
    it('should return Success if users are found', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var userFound;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _users["default"].getAllUsers(req, res);

            case 2:
              userFound = _context4.sent;
              (0, _chai.expect)(userFound.message).eql('Success');
              (0, _chai.expect)(userFound).to.have.keys(['message', 'users']);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('Get Single User', function () {
    it('should return Success if users are found', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var userFound;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _users["default"].getSingleUser(req, res);

            case 2:
              userFound = _context5.sent;
              (0, _chai.expect)(userFound.message).eql('Success');
              (0, _chai.expect)(userFound).to.have.keys(['message', 'user']);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  });
  describe('Edit Profile', function () {
    it('should return Success if users are found', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var userFound;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _users["default"].editProfile(req, res);

            case 2:
              userFound = _context6.sent;
              (0, _chai.expect)(userFound.message).eql('User updated successfully!');
              (0, _chai.expect)(userFound).to.have.keys(['message', 'userFound']);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
  });
  describe('Delete User', function () {
    it('should return User successfully deleted!, if user is deleted', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var userFound;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _users["default"].deleteUser(req, res);

            case 2:
              userFound = _context7.sent;

              if (req.params.userId === req.decoded.userId) {
                (0, _chai.expect)(userFound.message).eql('You can\'t delete yourself');
              }

              if (req.params.userId !== req.decoded.userId) {
                (0, _chai.expect)(userFound.message).eql('User successfully deleted!');
              }

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
  });
  describe('Enable User', function () {
    it('should return User successfully enabled!, if user is enabled', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var userFound;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _users["default"].enableUser(req, res);

            case 2:
              userFound = _context8.sent;

              if (req.params.userId === req.decoded.userId) {
                (0, _chai.expect)(userFound.message).eql('You can\'t enable yourself');
              }

              if (req.params.userId !== req.decoded.userId) {
                (0, _chai.expect)(userFound.message).eql('User successfully enabled!');
              }

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
  });
  describe('Disable User', function () {
    it('should return User successfully disabled!, if user is disabled', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      var userFound;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _users["default"].disableUser(req, res);

            case 2:
              userFound = _context9.sent;

              if (req.params.userId === req.decoded.userId) {
                (0, _chai.expect)(userFound.message).eql('You can\'t disable yourself');
              }

              if (req.params.userId !== req.decoded.userId) {
                (0, _chai.expect)(userFound.message).eql('User successfully disabled!');
              }

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
  });
}); // CRO-6320-BTCA
// +13468887062 azeez  +12147212034 ahmed