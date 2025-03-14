"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBus = exports.getBuses = exports.getBusLinea = exports.getBus = exports.deleteBus = exports.addBus = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var getBuses = exports.getBuses = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_querys.queries.getbuses);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          //res.status(500)
          res.send(_context.t0.message);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getBuses(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addBus = exports.addBus = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, placa_ut, año_ut, categ_ut, marca_ut, estado_ut, propietar_ut, capac_ut, tipo_ut, current_lat, current_lng, linea_ut, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, placa_ut = _req$body.placa_ut, año_ut = _req$body.año_ut, categ_ut = _req$body.categ_ut, marca_ut = _req$body.marca_ut, estado_ut = _req$body.estado_ut, propietar_ut = _req$body.propietar_ut, capac_ut = _req$body.capac_ut, tipo_ut = _req$body.tipo_ut, current_lat = _req$body.current_lat, current_lng = _req$body.current_lng, linea_ut = _req$body.linea_ut;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("placa", _connection.sql.VarChar, placa_ut).input("year", _connection.sql.VarChar, año_ut).input("categ", _connection.sql.VarChar, categ_ut).input("marca", _connection.sql.VarChar, marca_ut).input("estado", _connection.sql.VarChar, estado_ut).input("propiet", _connection.sql.VarChar, propietar_ut).input("capac", _connection.sql.TinyInt, capac_ut).input("tipo", _connection.sql.VarChar, tipo_ut).input("lati", _connection.sql.VarChar, current_lat).input("lngi", _connection.sql.VarChar, current_lng).input("linea", _connection.sql.SmallInt, linea_ut).query(_querys.queries.addbus);
        case 7:
          res.send(true);
          //res.json({placa_ut})
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          //res.status(500)
          res.send(false);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function addBus(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateBus = exports.updateBus = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, placa_ut, año_ut, categ_ut, marca_ut, estado_ut, propietar_ut, capac_ut, tipo_ut, id, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, placa_ut = _req$body2.placa_ut, año_ut = _req$body2.año_ut, categ_ut = _req$body2.categ_ut, marca_ut = _req$body2.marca_ut, estado_ut = _req$body2.estado_ut, propietar_ut = _req$body2.propietar_ut, capac_ut = _req$body2.capac_ut, tipo_ut = _req$body2.tipo_ut;
          id = req.params.id;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request().input("placa", _connection.sql.VarChar, placa_ut).input("year", _connection.sql.VarChar, año_ut).input("categ", _connection.sql.VarChar, categ_ut).input("marca", _connection.sql.VarChar, marca_ut).input("estado", _connection.sql.VarChar, estado_ut).input("propiet", _connection.sql.VarChar, propietar_ut).input("capac", _connection.sql.TinyInt, capac_ut).input("tipo", _connection.sql.VarChar, tipo_ut).input("id", id).query(_querys.queries.updatebus);
        case 8:
          res.send(true);
          //res.json({placa_ut})    
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          res.send(false);
          console.log(_context3.t0.message);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function updateBus(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteBus = exports.deleteBus = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input("id", id).query(_querys.queries.deletebus);
        case 7:
          result = _context4.sent;
          if (result.rowsAffected != 0) res.send(true);else res.send(false);
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          //res.status(500)
          res.send(false);
          console.log(_context4.t0.message);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function deleteBus(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getBusLinea = exports.getBusLinea = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var lin, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          lin = req.params.lin;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("num", lin).query(_querys.queries.getbusesLinea);
        case 7:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](1);
          //res.status(500)
          res.send(_context5.t0.message);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 11]]);
  }));
  return function getBusLinea(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getBus = exports.getBus = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var placa, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          placa = req.params.placa;
          _context6.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("placa", placa).query(_querys.queries.getbusByplaca);
        case 7:
          result = _context6.sent;
          res.json(result.recordset);
          _context6.next = 14;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          //res.status(500)
          res.send(_context6.t0.message);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return function getBus(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();