"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getUserById = exports.getUser = exports.deleteUser = exports.addUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getUser = exports.getUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_database.queries.getusers);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.send(false);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addUser = exports.addUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, usuar, clave, nombre, apellidos, correo, foto, tipo_cuenta, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, usuar = _req$body.usuar, clave = _req$body.clave, nombre = _req$body.nombre, apellidos = _req$body.apellidos, correo = _req$body.correo, foto = _req$body.foto, tipo_cuenta = _req$body.tipo_cuenta;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("user", _database.sql.VarChar, usuar).input("pass", _database.sql.VarChar, clave).input("name", _database.sql.VarChar, nombre).input("lname", _database.sql.VarChar, apellidos).input("email", _database.sql.VarChar, correo).input("photo", _database.sql.VarChar, foto).input("cuenta", _database.sql.VarChar, tipo_cuenta).query(_database.queries.adduser);
        case 7:
          //res.json({nombre})
          res.send(true);
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          //res.status(500)
          // res.send(error.message) 
          res.send(false);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function addUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUserById = exports.getUserById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          user = req.params.user;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input("Usu", user).query(_database.queries.getuserByid);
        case 7:
          result = _context3.sent;
          res.send(result.recordset[0]);
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          res.send(false);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 11]]);
  }));
  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteUser = exports.deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          user = req.params.user;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input("Usu", user).query(_database.queries.deleteuser);
        case 7:
          result = _context4.sent;
          res.send(true);
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          res.send(false);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deleteUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateUser = exports.updateUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, usuar, clave, nombre, apellidos, correo, foto, tipo_cuenta, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body2 = req.body, usuar = _req$body2.usuar, clave = _req$body2.clave, nombre = _req$body2.nombre, apellidos = _req$body2.apellidos, correo = _req$body2.correo, foto = _req$body2.foto, tipo_cuenta = _req$body2.tipo_cuenta; //const {curuser}= req.params;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request()
          //  .input("cUsu",curuseruser)
          .input("user", _database.sql.VarChar, usuar).input("pass", _database.sql.VarChar, clave).input("name", _database.sql.VarChar, nombre).input("lname", _database.sql.VarChar, apellidos).input("email", _database.sql.VarChar, correo).input("photo", _database.sql.VarChar, foto).input("cuenta", _database.sql.VarChar, tipo_cuenta)
          //.input("Usu",sql.VarChar,user)     
          .query(_database.queries.updateuser);
        case 7:
          //res.json({nombre,apellidos}) 
          res.send(true);
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          res.send(false);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return function updateUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();