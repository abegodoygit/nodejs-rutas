"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePasaje = exports.getPasaje = exports.deletePasaje = exports.addPasaje = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getPasaje = exports.getPasaje = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.getpasaje);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getPasaje(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addPasaje = exports.addPasaje = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, tipo_pj, descr_pj, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, tipo_pj = _req$body.tipo_pj, descr_pj = _req$body.descr_pj;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("tipo", _database.sql.VarChar, tipo_pj).input("desc", _database.sql.VarChar, descr_pj).query(_database.queries.addpasaje);
        case 7:
          res.send(true);
          //res.json({tipoUser})
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500);
          res.send(false);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function addPasaje(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updatePasaje = exports.updatePasaje = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, tipo_pj, descr_pj, id, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          //const {pasajeId,tipo_pj,descr_pj}= req.body
          _req$body2 = req.body, tipo_pj = _req$body2.tipo_pj, descr_pj = _req$body2.descr_pj;
          id = req.params.id;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request()
          //.input("Id",pasajeId)
          .input("tipo", _database.sql.VarChar, tipo_pj).input("desc", _database.sql.VarChar, descr_pj).input("Id", id).query(_database.queries.updatepasaje);
        case 8:
          //res.json({tipoUser})
          res.send(true);
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          res.status(500);
          res.send(false);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function updatePasaje(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deletePasaje = exports.deletePasaje = /*#__PURE__*/function () {
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
          return pool.request().input("Id", id).query(_database.queries.deletepasaje);
        case 7:
          result = _context4.sent;
          res.send(true);
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          res.status(500);
          //res.send(error.message)
          res.send(false);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deletePasaje(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();