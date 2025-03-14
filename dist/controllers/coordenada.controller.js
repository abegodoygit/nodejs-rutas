"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCoordenada = exports.getCoordenada = exports.deleteCoordenada = exports.addCoordenada = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var getCoordenada = exports.getCoordenada = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var con, resp;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context.sent;
          _context.next = 6;
          return con.request().query(_querys.queries.getcoord);
        case 6:
          resp = _context.sent;
          res.json(resp.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.send(false);
          console.log(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getCoordenada(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addCoordenada = exports.addCoordenada = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var con;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context2.sent;
          _context2.next = 6;
          return con.request().input("id", _connection.sql.Int, req.body.coordId).input("lat", _connection.sql.VarChar, req.body.lat_cor).input("lon", _connection.sql.VarChar, req.body.lng_cor).input("parada", _connection.sql.Int, req.body.parada_cor).query(_querys.queries.addcoord);
        case 6:
          res.send(true);
          _context2.next = 13;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.send(false);
          console.log(_context2.t0.message);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function addCoordenada(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateCoordenada = exports.updateCoordenada = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var con;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context3.sent;
          _context3.next = 6;
          return con.request().input("id", req.params.id).input("idc", req.body.coordId).input("lat", _connection.sql.VarChar, req.body.lat_cor).input("lon", _connection.sql.VarChar, req.body.lng_cor).input("parada", _connection.sql.Int, req.body.parada_cor).query(_querys.queries.updatecoord);
        case 6:
          res.send(true);
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.send(false);
          console.log(_context3.t0.message);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function updateCoordenada(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteCoordenada = exports.deleteCoordenada = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var con, resp;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context4.sent;
          _context4.next = 6;
          return con.request().input("id", req.params.id).query(_querys.queries.delcoord);
        case 6:
          resp = _context4.sent;
          if (resp.rowsAffected != 0) res.send(true);else res.send(false);
          _context4.next = 14;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          res.send(false);
          console.log(_context4.t0.message);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function deleteCoordenada(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();