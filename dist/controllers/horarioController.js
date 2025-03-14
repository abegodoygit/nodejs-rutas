"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateHorario = exports.getHorario = exports.getHorapp = exports.deleteHorario = exports.addHorario = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getHorario = exports.getHorario = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.gethorar);
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
  return function getHorario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getHorapp = exports.getHorapp = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var num, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          num = req.params.num;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("Id", num).query(_database.queries.gethorapp);
        case 7:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          res.status(500);
          res.send(_context2.t0.message);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return function getHorapp(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var addHorario = exports.addHorario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, HoraInicio, HoraFinal, hdia, hlinea, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, HoraInicio = _req$body.HoraInicio, HoraFinal = _req$body.HoraFinal, hdia = _req$body.hdia, hlinea = _req$body.hlinea;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input("inicio", _database.sql.VarChar, HoraInicio).input("fin", _database.sql.VarChar, HoraFinal).input("dia", _database.sql.TinyInt, hdia).input("linea", _database.sql.SmallInt, hlinea).query(_database.queries.addhorar);
        case 7:
          res.send(true);
          //res.json({hlinea})
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          //res.status(500)
          res.send(false);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function addHorario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteHorario = exports.deleteHorario = /*#__PURE__*/function () {
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
          return pool.request().input("Id", id).query(_database.queries.deletehorar);
        case 7:
          result = _context4.sent;
          res.send(true);
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          res.status(500);
          res.send(false);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deleteHorario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateHorario = exports.updateHorario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, HoraInicio, HoraFinal, id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          //const {nhoraId,HoraInicio,HoraFinal,hdia,hlinea}= req.body
          //const {HoraInicio,HoraFinal,hdia,hlinea}= req.body
          _req$body2 = req.body, HoraInicio = _req$body2.HoraInicio, HoraFinal = _req$body2.HoraFinal;
          id = req.params.id;
          _context5.prev = 2;
          _context5.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context5.sent;
          _context5.next = 8;
          return pool.request()
          //.input("Id",sql.Int,nhoraId)
          .input("inicio", _database.sql.VarChar, HoraInicio).input("fin", _database.sql.VarChar, HoraFinal)
          //.input("dia",sql.TinyInt,hdia)
          //.input("linea",sql.SmallInt,hlinea)
          .input("Id", id).query(_database.queries.updatehorar);
        case 8:
          res.send(true);
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](2);
          // res.status(500)
          res.send(_context5.t0);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 11]]);
  }));
  return function updateHorario(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();