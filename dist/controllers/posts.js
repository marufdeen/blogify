"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint radix: ["error", "as-needed"] */

/**
 * @description posts controller
 * class posts
 */
var postController = /*#__PURE__*/function () {
  function postController() {
    _classCallCheck(this, postController);
  }

  _createClass(postController, null, [{
    key: "createPost",

    /**
     * @description Create new post
     * @method createPost
     * @param {*} req
     * @param {*} res
     */
    value: function () {
      var _createPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var userId, _req$body, title, content, date;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = parseInt(req.decoded.userId);
                _req$body = req.body, title = _req$body.title, content = _req$body.content;
                date = new Date().toDateString();
                _context.next = 5;
                return _models.Post.create({
                  userId: userId,
                  title: title,
                  content: content,
                  date: date,
                  visible: true
                });

              case 5:
                return _context.abrupt("return", res.status(200).json({
                  message: 'Post created successfully!'
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createPost(_x, _x2) {
        return _createPost.apply(this, arguments);
      }

      return createPost;
    }()
    /**
     * @description fetch all posts from dummy db
     * @method getPosts
     * @param {*} req
     * @param {*} res
     */

  }, {
    key: "getPosts",
    value: function () {
      var _getPosts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var permittedPosts;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _models.Post.findAll({
                  where: {
                    visible: true
                  }
                });

              case 2:
                permittedPosts = _context2.sent;

                if (!(permittedPosts.length > 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.status(200).json({
                  message: 'Posts Found',
                  permittedPosts: permittedPosts
                }));

              case 5:
                return _context2.abrupt("return", res.status(401).json({
                  message: 'No post found. Be the first to create a post'
                }));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getPosts(_x3, _x4) {
        return _getPosts.apply(this, arguments);
      }

      return getPosts;
    }()
    /**
     * @description fetch a single post from dummy db
     * @method getSinglePost
     * @param {*} req
     * @param {*} res
     */

  }, {
    key: "getSinglePost",
    value: function () {
      var _getSinglePost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var postId, postFound;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                postId = parseInt(req.params.postId);
                _context3.next = 3;
                return _models.Post.findOne({
                  where: [{
                    id: postId
                  }, {
                    visible: true
                  }],
                  include: [{
                    model: _models.Comment,
                    as: 'comments'
                  }]
                });

              case 3:
                postFound = _context3.sent;

                if (!postFound) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", res.status(200).json({
                  message: 'Post Found',
                  postFound: postFound
                }));

              case 6:
                return _context3.abrupt("return", res.status(404).json({
                  message: 'Post not found'
                }));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getSinglePost(_x5, _x6) {
        return _getSinglePost.apply(this, arguments);
      }

      return getSinglePost;
    }()
    /**
     * @description View all of my posts
     * @method myPosts
     * @param {*} req
     * @param {*} res
     */

  }, {
    key: "myPosts",
    value: function () {
      var _myPosts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var userId, postsFound;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userId = parseInt(req.decoded.userId);
                _context4.next = 3;
                return _models.Post.findAll({
                  where: [{
                    userId: userId
                  }, {
                    visible: true
                  }]
                });

              case 3:
                postsFound = _context4.sent;

                if (!postsFound) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", res.status(200).json({
                  message: 'Posts Found',
                  postsFound: postsFound
                }));

              case 6:
                return _context4.abrupt("return", res.status(404).json({
                  message: 'Sorry!, you don\'t have any post yet. Try to create post'
                }));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function myPosts(_x7, _x8) {
        return _myPosts.apply(this, arguments);
      }

      return myPosts;
    }()
    /**
     * @description View each post
     * @method mySinglePost
     * @param {*} req
     * @param {*} res
     */

  }, {
    key: "mySinglePost",
    value: function () {
      var _mySinglePost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var userId, postId, postFound;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                userId = parseInt(req.decoded.userId);
                postId = parseInt(req.params.postId);
                _context5.next = 4;
                return _models.Post.findOne({
                  where: [{
                    id: postId
                  }, {
                    userId: userId
                  }, {
                    visible: true
                  }],
                  include: [{
                    model: _models.Comment,
                    as: 'comments'
                  }]
                });

              case 4:
                postFound = _context5.sent;

                if (!postFound) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", res.status(200).json({
                  message: 'Post Found',
                  postFound: postFound
                }));

              case 7:
                return _context5.abrupt("return", res.status(401).json({
                  message: 'Post not found'
                }));

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function mySinglePost(_x9, _x10) {
        return _mySinglePost.apply(this, arguments);
      }

      return mySinglePost;
    }()
    /**
     * @description Edit post
     * @method editMyPost
     * @param {*} req
     * @param {*} res
     */

  }, {
    key: "editMyPost",
    value: function () {
      var _editMyPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var postId, userId, postFound;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                postId = parseInt(req.params.postId);
                userId = parseInt(req.decoded.userId);
                _context6.next = 4;
                return _models.Post.findOne({
                  where: [{
                    id: postId
                  }, {
                    userId: userId
                  }, {
                    visible: true
                  }]
                });

              case 4:
                postFound = _context6.sent;

                if (!postFound) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 8;
                return postFound.update({
                  title: req.body.title || postFound.title,
                  content: req.body.content || postFound.content
                });

              case 8:
                return _context6.abrupt("return", res.status(200).json({
                  message: 'Post updated successfully!',
                  postFound: postFound
                }));

              case 9:
                return _context6.abrupt("return", res.status(404).json({
                  message: 'Post not found'
                }));

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function editMyPost(_x11, _x12) {
        return _editMyPost.apply(this, arguments);
      }

      return editMyPost;
    }()
    /**
     * @description Delete post
     * @method deleteMyPost
     * @param {*} req
     * @param {*} res
     */

  }, {
    key: "deleteMyPost",
    value: function () {
      var _deleteMyPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var postId, userId, postFound;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                postId = parseInt(req.params.postId);
                userId = parseInt(req.decoded.userId);
                _context7.next = 4;
                return _models.Post.findOne({
                  where: [{
                    id: postId
                  }, {
                    userId: userId
                  }, {
                    visible: true
                  }]
                });

              case 4:
                postFound = _context7.sent;

                if (!postFound) {
                  _context7.next = 9;
                  break;
                }

                _context7.next = 8;
                return postFound.destroy();

              case 8:
                return _context7.abrupt("return", res.status(401).json({
                  message: 'Post deleted along with corresponding comments!'
                }));

              case 9:
                return _context7.abrupt("return", res.status(401).json({
                  message: 'Post not found'
                }));

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function deleteMyPost(_x13, _x14) {
        return _deleteMyPost.apply(this, arguments);
      }

      return deleteMyPost;
    }()
  }]);

  return postController;
}();

exports["default"] = postController;