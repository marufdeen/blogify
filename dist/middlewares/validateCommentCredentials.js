"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.validateComment = void 0;

var _commentValidations = require("../helper/commentValidations");

var validateComment = function validateComment(req, res, next) {
  var errors = (0, _commentValidations.validate)(req.body);

  if (errors[0]) {
    return res.status(401).json({
      errors: errors
    });
  }

  return next();
};

exports.validateComment = validateComment;
var _default = validateComment;
exports["default"] = _default;