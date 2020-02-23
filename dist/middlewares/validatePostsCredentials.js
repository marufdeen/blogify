"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.validatePost = void 0;

var _postValidations = require("../helper/postValidations");

var validatePost = function validatePost(req, res, next) {
  var errors = (0, _postValidations.validate)(req.body);

  if (errors[0]) {
    return res.status(401).json({
      errors: errors
    });
  }

  return next();
};

exports.validatePost = validatePost;
var _default = validatePost;
exports["default"] = _default;