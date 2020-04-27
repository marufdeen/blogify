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
 * @description comments controler
 * class comments
 */
var comments = /*#__PURE__*/function () {
  function comments() {
    _classCallCheck(this, comments);
  }

  _createClass(comments, null, [{
    key: "createComment",

    /**
       * @description Create comment into comments dummy db
       * @method createComment
       * @param {*} req
       * @param {*} res
       */
    value: function () {
      var _createComment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var postId, date, postFound, _req$body, visitorName, visitorEmail, content;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                postId = parseInt(req.params.postId);
                date = new Date().toDateString();
                _context.next = 4;
                return _models.Post.findOne({
                  where: {
                    id: postId
                  }
                });

              case 4:
                postFound = _context.sent;

                if (!postFound) {
                  _context.next = 10;
                  break;
                }

                _req$body = req.body, visitorName = _req$body.visitorName, visitorEmail = _req$body.visitorEmail, content = _req$body.content;
                _context.next = 9;
                return _models.Comment.create({
                  postId: postId,
                  visitorName: visitorName,
                  visitorEmail: visitorEmail,
                  content: content,
                  date: date
                });

              case 9:
                return _context.abrupt("return", res.status(200).json({
                  message: 'Comment appended successfully!'
                }));

              case 10:
                return _context.abrupt("return", res.status(403).json({
                  message: 'Post not found, comment not appended'
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createComment(_x, _x2) {
        return _createComment.apply(this, arguments);
      }

      return createComment;
    }()
    /**
       * @description Delete comment
       * @method deleteComment
       * @param {*} req
       * @param {*} res
       */

  }, {
    key: "deleteComment",
    value: function () {
      var _deleteComment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var userId, postId, commentId, postFound, commentFound;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userId = parseInt(req.decoded.userId);
                postId = parseInt(req.params.postId);
                commentId = parseInt(req.params.commentId);
                _context2.next = 5;
                return _models.Post.findOne({
                  where: [{
                    id: postId
                  }, {
                    userId: userId
                  }]
                });

              case 5:
                postFound = _context2.sent;

                if (!postFound) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 9;
                return _models.Comment.findOne({
                  where: [{
                    id: commentId
                  }, {
                    postId: postId
                  }]
                });

              case 9:
                commentFound = _context2.sent;

                if (!commentFound) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 13;
                return commentFound.destroy();

              case 13:
                return _context2.abrupt("return", res.status(403).json({
                  message: 'Comment successfully deleted!'
                }));

              case 14:
                return _context2.abrupt("return", res.status(403).json({
                  message: 'No comment found to be deleted'
                }));

              case 15:
                return _context2.abrupt("return", res.status(403).json({
                  message: 'Sorry!, you can\'t delete comment from a post you don\'t own'
                }));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function deleteComment(_x3, _x4) {
        return _deleteComment.apply(this, arguments);
      }

      return deleteComment;
    }()
  }]);

  return comments;
}();

exports["default"] = comments;