"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDia = exports.getDia = exports.deleteDia = exports.addDia = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getDia = exports.getDia = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.getdia);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          //res.status(500)
          res.send(false);
          // res.send(error.message)
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getDia(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addDia = exports.addDia = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var nombre_ds, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          nombre_ds = req.body.nombre_ds;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("day", _database.sql.VarChar, nombre_ds).query(_database.queries.adddia);
        case 7:
          //res.json({dia})
          res.send(true);
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          //res.status(500)
          res.send(_context2.t0.message);
          //res.send(false)
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function addDia(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateDia = exports.updateDia = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var nombre_ds, id, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          // const {diaId,nombre_ds}= req.body
          nombre_ds = req.body.nombre_ds;
          id = req.params.id;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request()
          //.input("Id",sql.TinyInt,diaId)
          .input("day", _database.sql.VarChar, nombre_ds).input("Id", id).query(_database.queries.updatedia);
        case 8:
          //res.json(true)  
          res.send(true);
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          //res.status(500)
          res.send(false);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function updateDia(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteDia = exports.deleteDia = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input("Id", id).query(_database.queries.deletedia);
        case 7:
          result = _context4.sent;
          res.send(true);
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          //res.status(500)
          //res.send(error.message)
          res.send(false);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deleteDia(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();