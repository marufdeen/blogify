"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.validate = void 0;

var _regEx = require("./regEx");

var validate = function validate(body) {
  var visitorName = body.visitorName,
      visitorEmail = body.visitorEmail,
      content = body.content;
  var commentErrors = [];

  if (!visitorName || !_regEx.validName.test(visitorName)) {
    commentErrors.push({
      visitorName: 'Your name is required and must be at least three alphabetical characters.'
    });
  }

  if (!visitorEmail || !_regEx.validEmail.test(visitorEmail)) {
    commentErrors.push({
      visitorEmail: 'Your email is required and must be in a valid E-mail Format.'
    });
  }

  if (!content) {
    commentErrors.push({
      content: 'Your comment is missing.'
    });
  }

  return commentErrors;
};

exports.validate = validate;
var _default = validate;
exports["default"] = _default;