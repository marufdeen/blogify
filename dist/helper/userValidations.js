"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../models");

var _regEx = require("./regEx");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var checkEmail = function checkEmail(email) {
  return _models.User.findOne({
    where: {
      email: email
    }
  });
};
/**
 * @description validate user details
 * @class validateDetails
 */


var validations = /*#__PURE__*/function () {
  function validations() {
    _classCallCheck(this, validations);
  }

  _createClass(validations, null, [{
    key: "signupValidations",

    /**
       * @description validate user details
       * @function signupValidations
       * @param {object} body
       * @returns {Array} signupErrors
       */
    value: function () {
      var _signupValidations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(body) {
        var firstName, lastName, email, password, confirmPassword, signupErrors, emailAlreadyExist;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                firstName = body.firstName, lastName = body.lastName, email = body.email, password = body.password, confirmPassword = body.confirmPassword;
                signupErrors = {};

                if (!firstName || firstName.length < 3 || !_regEx.validName.test(firstName)) {
                  signupErrors.firstName = [];
                  signupErrors.firstName.push('First name is required, with at least three alphabetical characters');
                }

                if (!lastName || lastName.length < 3 || !_regEx.validName.test(lastName)) {
                  signupErrors.lastName = [];
                  signupErrors.lastName.push('Last name is required, with at least three alphabetical characters');
                }

                if (!email || !_regEx.validEmail.test(email)) {
                  signupErrors.email = [];
                  signupErrors.email.push('Invalid Email Format');
                }

                _context.next = 7;
                return checkEmail(email);

              case 7:
                emailAlreadyExist = _context.sent;

                if (emailAlreadyExist) {
                  signupErrors.email = [];
                  signupErrors.email.push('Email already exist');
                }

                if (!password || password.length < 3) {
                  signupErrors.password = [];
                  signupErrors.password.push('Password is required, with at least three characters');
                }

                if (!confirmPassword || confirmPassword !== password) {
                  signupErrors.confirmPassword = [];
                  signupErrors.confirmPassword.push('Passwords don\'t match');
                }

                return _context.abrupt("return", signupErrors);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function signupValidations(_x) {
        return _signupValidations.apply(this, arguments);
      }

      return signupValidations;
    }()
    /**
       * @description validate user details
       * @function signinValidations
       * @param {object} body
       * @returns {Array} siginErrors
       */

  }, {
    key: "signinValidations",
    value: function signinValidations(body) {
      var email = body.email,
          password = body.password;
      var siginErrors = {};

      if (!email || !_regEx.validEmail.test(email)) {
        siginErrors.email = [];
        siginErrors.email.push('Invalid Email Format');
      }

      if (!password || password.length < 2) {
        siginErrors.password = [];
        siginErrors.password.push('Password must be at least three characters');
      }

      return siginErrors;
    }
    /**
       * @description validate user details
       * @function editValidations
       * @param {object} body
       * @returns {Array} editErrors
       */

  }, {
    key: "editValidations",
    value: function () {
      var _editValidations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(body, userId) {
        var firstName, lastName, email, editErrors, emailAlreadyExist;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                firstName = body.firstName, lastName = body.lastName, email = body.email;
                editErrors = [];
                _context2.next = 4;
                return checkEmail(email);

              case 4:
                emailAlreadyExist = _context2.sent;

                if (!email || !_regEx.validEmail.test(email)) {
                  editErrors.push({
                    Email: 'Invalid Email Format'
                  });
                }

                if (emailAlreadyExist.dataValues.email.length > 0 && emailAlreadyExist.dataValues.id !== userId) {
                  editErrors.push({
                    Email: 'User already exist'
                  });
                }

                if (!firstName || firstName.length < 3 || !_regEx.validName.test(firstName)) {
                  editErrors.push({
                    firstName: 'First Name must be at least three alphabetical characters'
                  });
                }

                if (!lastName || lastName.length < 3 || !_regEx.validName.test(lastName)) {
                  editErrors.push({
                    lastName: 'Last Name must be at least three alphabetical characters'
                  });
                }

                return _context2.abrupt("return", editErrors);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function editValidations(_x2, _x3) {
        return _editValidations.apply(this, arguments);
      }

      return editValidations;
    }()
  }, {
    key: "profileValidation",
    value: function profileValidation(body) {
      var profile = body.profile,
          profilePicture = body.profilePicture,
          company = body.company,
          website = body.website,
          location = body.location,
          profession = body.profession,
          skills = body.skills,
          github = body.github,
          bio = body.bio,
          twitter = body.twitter,
          facebook = body.facebook,
          linkedIn = body.linkedIn;
    }
  }]);

  return validations;
}();

exports["default"] = validations;