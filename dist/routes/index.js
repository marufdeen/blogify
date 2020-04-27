"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("../controllers/users"));

var _posts = _interopRequireDefault(require("../controllers/posts"));

var _comments = _interopRequireDefault(require("../controllers/comments"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verifyToken"));

var _checkAuth = require("../middlewares/checkAuth");

var _userCredentials = require("../middlewares/userCredentials");

var _validatePostsCredentials = require("../middlewares/validatePostsCredentials");

var _validateCommentCredentials = require("../middlewares/validateCommentCredentials");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = _express["default"].Router(); // Users Routes


app.post('/register', _userCredentials.validateSignup, _users["default"].userRegister);
app.post('/login', _userCredentials.validateSignin, _users["default"].userLogin);
app.get('/profile', _verifyToken["default"], _checkAuth.isUserValid, _userCredentials.validateEdit, _users["default"].editDetails);
app.get('/editDetails', _verifyToken["default"], _checkAuth.isUserValid, _users["default"].getProfile);
app.put('/createprofile/', _verifyToken["default"], _checkAuth.isUserValid, _users["default"].createProfile); //validateProfile

app.get('/users', _verifyToken["default"], _checkAuth.isUserAdmin, _users["default"].getAllUsers);
app.get('/users/:userId', _verifyToken["default"], _checkAuth.isUserAdmin, _users["default"].getSingleUser);
app["delete"]('/deleteuser/:userId', _verifyToken["default"], _checkAuth.isUserAdmin, _users["default"].deleteUser);
app.patch('/enableuser/:userId', _verifyToken["default"], _checkAuth.isUserAdmin, _users["default"].enableUser);
app.patch('/disableuser/:userId', _verifyToken["default"], _checkAuth.isUserAdmin, _users["default"].disableUser); // Posts Routes

app.get('/posts', _posts["default"].getPosts);
app.get('/posts/:postId', _posts["default"].getSinglePost);
app.post('/posts', _verifyToken["default"], _checkAuth.isUserValid, _validatePostsCredentials.validatePost, _posts["default"].createPost);
app.get('/myposts', _verifyToken["default"], _checkAuth.isUserValid, _posts["default"].myPosts);
app.get('/myposts/:postId', _verifyToken["default"], _checkAuth.isUserValid, _posts["default"].mySinglePost);
app.put('/myposts/:postId', _verifyToken["default"], _checkAuth.isUserValid, _posts["default"].editMyPost);
app["delete"]('/myposts/:postId', _verifyToken["default"], _checkAuth.isUserValid, _posts["default"].deleteMyPost); // Comments Routes

app.post('/comments/:postId', _validateCommentCredentials.validateComment, _comments["default"].createComment);
app["delete"]('/comments/:postId/:commentId', _verifyToken["default"], _checkAuth.isUserValid, _comments["default"].deleteComment);
var _default = app;
exports["default"] = _default;