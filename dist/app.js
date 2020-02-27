"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("idempotent-babel-polyfill");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.port || 5000;
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../client/dist')));
app.use('/api/v3', _index["default"]);
app.get('*', function (req, res) {
  return res.status(200).sendFile(_path["default"].join(__dirname, '../client/dist/index.html'));
});
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
var _default = app;
exports["default"] = _default;