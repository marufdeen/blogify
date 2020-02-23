"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _models = require("../models");

var _createToken = _interopRequireDefault(require("../helper/createToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint radix: ["error", "as-needed"] */
_dotenv["default"].config();

var saltRounds = 10;
/**
 * @description users controller
 * class users
 */

var users =
/*#__PURE__*/
function () {
  function users() {
    _classCallCheck(this, users);
  }

  _createClass(users, null, [{
    key: "userRegister",

    /**
       * @description signup a user into users dummy db
       * @method userRegister
       * @param {*} req
       * @param {*} res
       */
    value: function () {
      var _userRegister = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var createUser, _req$body, firstName, lastName, email, password, date;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password;
                date = new Date().toDateString();
                _context2.next = 4;
                return _bcryptjs["default"].hash(password, saltRounds,
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(error, hash) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _models.User.create({
                              firstName: firstName,
                              lastName: lastName,
                              email: email,
                              password: hash,
                              enabled: true,
                              profile: false,
                              role: 0,
                              date: date
                            });

                          case 2:
                            createUser = _context.sent;
                            _context.t0 = res.status(201);
                            _context.next = 6;
                            return (0, _createToken["default"])(createUser.dataValues);

                          case 6:
                            _context.t1 = _context.sent;
                            _context.t2 = {
                              message: 'User successfully created',
                              token: _context.t1
                            };
                            return _context.abrupt("return", _context.t0.json.call(_context.t0, _context.t2));

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function userRegister(_x, _x2) {
        return _userRegister.apply(this, arguments);
      }

      return userRegister;
    }()
    /**
       * @description login a user from the users dummy db
       * @method userLogin
       * @param {*} req
       * @param {*} res
       */

  }, {
    key: "userLogin",
    value: function () {
      var _userLogin = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var _req$body2, email, password, userFound;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
                _context3.next = 3;
                return _models.User.findOne({
                  where: [{
                    email: email
                  }, {
                    enabled: true
                  }]
                });

              case 3:
                userFound = _context3.sent;

                if (!userFound) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 7;
                return _bcryptjs["default"].compare(password, userFound.password, function (error, result) {
                  if (result) {
                    return res.status(200).json({
                      message: 'Access granted!',
                      token: (0, _createToken["default"])(userFound)
                    });
                  }

                  return res.status(400).json({
                    message: 'Email and password not match!'
                  });
                });

              case 7:
                _context3.next = 10;
                break;

              case 9:
                return _context3.abrupt("return", res.status(400).json({
                  message: 'Access denied!'
                }));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function userLogin(_x5, _x6) {
        return _userLogin.apply(this, arguments);
      }

      return userLogin;
    }()
    /**
       * @description fetch all users from users dummy db
       * @method getAllUsers
       * @param {*} req
       * @param {*} res
       */

  }, {
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res) {
        var allUsers;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _models.User.findAll({});

              case 2:
                allUsers = _context4.sent;

                if (!(allUsers.length > 0)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", res.status(200).json({
                  message: 'Success',
                  users: allUsers
                }));

              case 5:
                return _context4.abrupt("return", res.status(200).json({
                  message: 'No registered user yet!'
                }));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getAllUsers(_x7, _x8) {
        return _getAllUsers.apply(this, arguments);
      }

      return getAllUsers;
    }()
    /**
       * @description get single user from users dummy db
       * @method getSingleUser
       * @param {*} req
       * @param {*} res
       */

  }, {
    key: "getSingleUser",
    value: function () {
      var _getSingleUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(req, res) {
        var userId, userFound;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                userId = parseInt(req.params.userId);
                _context5.next = 3;
                return _models.User.findOne({
                  where: {
                    id: userId
                  },
                  include: [{
                    model: _models.Post,
                    as: 'Posts'
                  }]
                });

              case 3:
                userFound = _context5.sent;

                if (!userFound) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", res.status(200).json({
                  message: 'Success',
                  user: userFound
                }));

              case 6:
                return _context5.abrupt("return", res.status(404).json({
                  message: 'User not found!'
                }));

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getSingleUser(_x9, _x10) {
        return _getSingleUser.apply(this, arguments);
      }

      return getSingleUser;
    }()
    /**
       * @description Get profile
       * @method getProfile
       * @param {*} req
       * @param {*} res
       */

  }, {
    key: "getProfile",
    value: function () {
      var _getProfile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(req, res) {
        var userId, userFound;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userId = req.decoded.userId;
                _context6.next = 3;
                return _models.User.findOne({
                  where: [{
                    id: userId
                  }]
                });

              case 3:
                userFound = _context6.sent;

                if (!userFound) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", res.status(200).json({
                  message: 'Profile found!',
                  userFound: userFound
                }));

              case 6:
                return _context6.abrupt("return", res.status(404).json({
                  message: 'User not found'
                }));

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getProfile(_x11, _x12) {
        return _getProfile.apply(this, arguments);
      }

      return getProfile;
    }()
    /**
       * @description Editprofile
       * @method editProfile
       * @param {*} req
       * @param {*} res
       */

  }, {
    key: "createProfile",
    value: function () {
      var _createProfile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(req, res) {
        var userId, userFound;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                userId = parseInt(req.decoded.userId);
                _context7.next = 3;
                return _models.User.findOne({
                  where: {
                    id: userId
                  }
                });

              case 3:
                userFound = _context7.sent;

                if (!userFound) {
                  _context7.next = 8;
                  break;
                }

                _context7.next = 7;
                return userFound.update({
                  profile: req.body.profile || userFound.profile,
                  profilePicture: req.body.profilePicture || userFound.profilePicture,
                  company: req.body.company || userFound.company,
                  website: req.body.website || userFound.website,
                  location: req.body.location || userFound.location,
                  profession: req.body.profession || userFound.profession,
                  skills: req.body.skills || userFound.skills,
                  github: req.body.github || userFound.github,
                  bio: req.body.bio || userFound.bio,
                  twitter: req.body.twitter || userFound.twitter,
                  facebook: req.body.facebook || userFound.facebook,
                  linkedIn: req.body.linkedIn || userFound.linkedIn
                });

              case 7:
                return _context7.abrupt("return", res.status(200).json({
                  message: 'User updated successfully!',
                  userFound: userFound
                }));

              case 8:
                return _context7.abrupt("return", res.status(404).json({
                  message: 'User not found'
                }));

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function createProfile(_x13, _x14) {
        return _createProfile.apply(this, arguments);
      }

      return createProfile;
    }()
    /**
       * @description Enable a User from userDB dummy database
       * @method enableUser
       * @param {*} req
       * @param {*} res
       */

  }, {
    key: "enableUser",
    value: function () {
      var _enableUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(req, res) {
        var userId, signInId, userFound, postFound;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                userId = parseInt(req.params.userId);
                signInId = parseInt(req.decoded.userId);
                _context8.next = 4;
                return _models.User.findOne({
                  where: {
                    id: userId
                  }
                });

              case 4:
                userFound = _context8.sent;

                if (!userFound) {
                  _context8.next = 16;
                  break;
                }

                if (!(userFound.dataValues.id === signInId)) {
                  _context8.next = 8;
                  break;
                }

                return _context8.abrupt("return", res.status(403).json({
                  message: 'You can\'t enable yourself'
                }));

              case 8:
                _context8.next = 10;
                return userFound.update({
                  enabled: true
                });

              case 10:
                _context8.next = 12;
                return _models.Post.findAll({
                  where: [{
                    userId: userId
                  }, {
                    visible: false
                  }]
                });

              case 12:
                postFound = _context8.sent;
                _context8.next = 15;
                return postFound.forEach(function (post) {
                  post.update({
                    visible: true
                  });
                });

              case 15:
                return _context8.abrupt("return", res.status(200).json({
                  message: 'User successfully enabled!'
                }));

              case 16:
                return _context8.abrupt("return", res.status(201).json({
                  message: 'User not found!'
                }));

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function enableUser(_x15, _x16) {
        return _enableUser.apply(this, arguments);
      }

      return enableUser;
    }()
    /**
       * @description Disable a User from userDB dummy database
       * @method disableUser
       * @param {*} req
       * @param {*} res
       */

  }, {
    key: "disableUser",
    value: function () {
      var _disableUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(req, res) {
        var userId, signInId, userFound, postFound;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                userId = parseInt(req.params.userId);
                signInId = parseInt(req.decoded.userId);
                _context9.next = 4;
                return _models.User.findOne({
                  where: {
                    id: userId
                  }
                });

              case 4:
                userFound = _context9.sent;

                if (!userFound) {
                  _context9.next = 16;
                  break;
                }

                if (!(userFound.dataValues.id === signInId)) {
                  _context9.next = 8;
                  break;
                }

                return _context9.abrupt("return", res.status(403).json({
                  message: 'You can\'t disable yourself'
                }));

              case 8:
                _context9.next = 10;
                return userFound.update({
                  enabled: false
                });

              case 10:
                _context9.next = 12;
                return _models.Post.findAll({
                  where: [{
                    userId: userId
                  }, {
                    visible: true
                  }]
                });

              case 12:
                postFound = _context9.sent;
                _context9.next = 15;
                return postFound.forEach(function (post) {
                  post.update({
                    visible: false
                  });
                });

              case 15:
                return _context9.abrupt("return", res.status(200).json({
                  message: 'User successfully disabled!'
                }));

              case 16:
                return _context9.abrupt("return", res.status(201).json({
                  message: 'User not found!'
                }));

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function disableUser(_x17, _x18) {
        return _disableUser.apply(this, arguments);
      }

      return disableUser;
    }()
    /**
       * @description Delete User from userDB dummy database
       * @method deleteUser
       * @param {*} req
       * @param {*} res
       */

  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(req, res) {
        var userId, signInId, userFound;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                userId = parseInt(req.params.userId);
                signInId = parseInt(req.decoded.userId);
                _context10.next = 4;
                return _models.User.findOne({
                  where: {
                    id: userId
                  }
                });

              case 4:
                userFound = _context10.sent;

                if (!userFound) {
                  _context10.next = 11;
                  break;
                }

                if (!(userFound.id === signInId)) {
                  _context10.next = 8;
                  break;
                }

                return _context10.abrupt("return", res.status(403).json({
                  message: 'You can\'t delete yourself'
                }));

              case 8:
                _context10.next = 10;
                return userFound.destroy();

              case 10:
                return _context10.abrupt("return", res.status(200).json({
                  message: 'User successfully deleted!',
                  userFound: userFound
                }));

              case 11:
                return _context10.abrupt("return", res.status(201).json({
                  message: 'User not found!'
                }));

              case 12:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function deleteUser(_x19, _x20) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }]);

  return users;
}();

exports["default"] = users;