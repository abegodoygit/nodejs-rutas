"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTarifa = exports.getTarifaap = exports.getTarifaByLinea = exports.getTarifa = exports.deleteTarifa = exports.addTarifa = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getTarifa = exports.getTarifa = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.gettarifa);
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
  return function getTarifa(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//para mostrar tipo y descripcion de pasaje
var getTarifaap = exports.getTarifaap = /*#__PURE__*/function () {
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
          return pool.request().input("Id", num).query(_database.queries.gettarifaap);
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
  return function getTarifaap(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var addTarifa = exports.addTarifa = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, costo, tpasaje, tlinea, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, costo = _req$body.costo, tpasaje = _req$body.tpasaje, tlinea = _req$body.tlinea;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input("cost", _database.sql.Float, costo).input("pasaj", _database.sql.TinyInt, tpasaje).input("linea", _database.sql.SmallInt, tlinea).query(_database.queries.addtarifa);
        case 7:
          res.send(true);
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          res.status(500);
          res.send(false);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function addTarifa(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateTarifa = exports.updateTarifa = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var costo, id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          //const {tarifaId,costo,tpasaje,tlinea}= req.body
          //const {costo,tpasaje,tlinea}= req.body
          costo = req.body.costo;
          id = req.params.id;
          _context4.prev = 2;
          _context4.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context4.sent;
          _context4.next = 8;
          return pool.request()
          //.input("Id",sql.SmallInt,tarifaId)
          .input("cost", _database.sql.Float, costo)
          //.input("pasaj",sql.TinyInt,tpasaje)  
          //.input("linea",sql.SmallInt,tlinea) 
          .input("Id", id).query(_database.queries.updatetarifa);
        case 8:
          result = _context4.sent;
          res.send(true);
          _context4.next = 16;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](2);
          res.status(500);
          res.send(false);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return function updateTarifa(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteTarifa = exports.deleteTarifa = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("Id", id).query(_database.queries.deletetarifa);
        case 7:
          res.send(true);
          _context5.next = 14;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          res.status(500);
          res.send(false);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return function deleteTarifa(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getTarifaByLinea = exports.getTarifaByLinea = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var linea, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          linea = req.params.linea;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("line", linea).query(_database.queries.gettarifaByid);
        case 7:
          result = _context6.sent;
          res.json(result.recordset);
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](1);
          res.status(500);
          res.send(_context6.t0.message);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 11]]);
  }));
  return function getTarifaByLinea(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();