"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _posts = _interopRequireDefault(require("../../controllers/posts"));

var _postdetails = require("./mockDB/postdetails");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_chai["default"].use(_chaiHttp["default"]);

describe('Test Post Controller', function () {
  var req;
  var res;
  beforeEach(function () {
    req = {
      body: {},
      query: {},
      params: {
        postId: 1
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
  describe('Get All Posts', function () {
    it('should return Posts Found if found',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var postFound;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _posts["default"].getPosts(req, res);

            case 2:
              postFound = _context.sent;
              (0, _chai.expect)(postFound.message).eql('Posts Found');
              (0, _chai.expect)(postFound).to.have.keys('message', 'permittedPosts');

              if (postFound == null) {
                (0, _chai.expect)(postFound.message).eql('No post found. Be the first to create a post');
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  describe('Get Single Post', function () {
    it('should return Post Found if found',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var postFound;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _posts["default"].getSinglePost(req, res);

            case 2:
              postFound = _context2.sent;
              (0, _chai.expect)(postFound.message).eql('Post Found');
              (0, _chai.expect)(postFound).to.have.keys('message', 'postFound');

              if (postFound == null) {
                (0, _chai.expect)(postFound.message).eql('No post found');
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
  describe('Create Post', function () {
    it('should return Post created successfully if created',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var postFound;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req.body = _postdetails.create.complete;
              _context3.next = 3;
              return _posts["default"].createPost(req, res);

            case 3:
              postFound = _context3.sent;
              (0, _chai.expect)(postFound.message).eql('Post created successfully!');

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  describe('Get My Posts', function () {
    it('should return Posts Found if found',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var postFound;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _posts["default"].myPosts(req, res);

            case 2:
              postFound = _context4.sent;
              (0, _chai.expect)(postFound.message).eql('Posts Found');
              (0, _chai.expect)(postFound).to.have.keys('message', 'postsFound');

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('Get My Single Post', function () {
    it('should return Post Found if found',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var postFound;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _posts["default"].mySinglePost(req, res);

            case 2:
              postFound = _context5.sent;
              (0, _chai.expect)(postFound.message).eql('Post Found');
              (0, _chai.expect)(postFound).to.have.keys('message', 'postFound');

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  });
  describe('Edit My Post', function () {
    it('should return Post updated successfully! if updated',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6() {
      var postFound;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req.body = _postdetails.put.correct;
              _context6.next = 3;
              return _posts["default"].editMyPost(req, res);

            case 3:
              postFound = _context6.sent;
              (0, _chai.expect)(postFound.message).eql('Post updated successfully!');
              (0, _chai.expect)(postFound).to.have.keys('message', 'postFound');

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
  });
  describe('Delete My Post', function () {
    it('should return Post deleted along with corresponding comments! if deleted',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7() {
      var postFound;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _posts["default"].deleteMyPost(req, res);

            case 2:
              postFound = _context7.sent;
              (0, _chai.expect)(postFound.message).eql('Post deleted along with corresponding comments!');

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
  });
});