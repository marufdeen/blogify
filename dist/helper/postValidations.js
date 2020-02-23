"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.validate = void 0;

var validate = function validate(body) {
  var title = body.title,
      content = body.content;
  var postErrors = [];

  if (!title || title.length < 3 || title.length > 50) {
    postErrors.push({
      title: 'Post Title is required and should at least between 3 - 50 characters'
    });
  }

  if (!content) {
    postErrors.push({
      title: 'Please, write something. Your content is missing'
    });
  }

  return postErrors;
};

exports.validate = validate;
var _default = validate;
exports["default"] = _default;