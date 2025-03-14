"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUnidad = exports.getUnidadesLinea = exports.getUnidadDet = exports.getUnidad = exports.deleteUnidad = exports.addUnidad = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getUnidad = exports.getUnidad = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.getunidad);
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
  return function getUnidad(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addUnidad = exports.addUnidad = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, placa_ut, año_ut, categ_ut, marca_ut, estado_ut, propietar_ut, capac_ut, tipo_ut, current_lat, current_lng, linea_ut, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, placa_ut = _req$body.placa_ut, año_ut = _req$body.año_ut, categ_ut = _req$body.categ_ut, marca_ut = _req$body.marca_ut, estado_ut = _req$body.estado_ut, propietar_ut = _req$body.propietar_ut, capac_ut = _req$body.capac_ut, tipo_ut = _req$body.tipo_ut, current_lat = _req$body.current_lat, current_lng = _req$body.current_lng, linea_ut = _req$body.linea_ut;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("placa", _database.sql.VarChar, placa_ut).input("year", _database.sql.VarChar, año_ut).input("categ", _database.sql.VarChar, categ_ut).input("marca", _database.sql.VarChar, marca_ut).input("estado", _database.sql.VarChar, estado_ut).input("propiet", _database.sql.VarChar, propietar_ut).input("capac", _database.sql.TinyInt, capac_ut).input("tipo", _database.sql.VarChar, tipo_ut).input("lati", _database.sql.VarChar, current_lat).input("lngi", _database.sql.VarChar, current_lng).input("linea", _database.sql.SmallInt, linea_ut).query(_database.queries.addunidad);
        case 7:
          res.send(true);
          //res.json({placa_ut})
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
  return function addUnidad(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateUnidad = exports.updateUnidad = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, año_ut, categ_ut, marca_ut, estado_ut, propietar_ut, capac_ut, tipo_ut, id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, año_ut = _req$body2.año_ut, categ_ut = _req$body2.categ_ut, marca_ut = _req$body2.marca_ut, estado_ut = _req$body2.estado_ut, propietar_ut = _req$body2.propietar_ut, capac_ut = _req$body2.capac_ut, tipo_ut = _req$body2.tipo_ut; //const {id}= req.params;
          id = req.params.id;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request()
          // .input("placa",sql.VarChar,placa_ut)
          .input("year", _database.sql.VarChar, año_ut).input("categ", _database.sql.VarChar, categ_ut).input("marca", _database.sql.VarChar, marca_ut).input("estado", _database.sql.VarChar, estado_ut).input("propiet", _database.sql.VarChar, propietar_ut).input("capac", _database.sql.TinyInt, capac_ut).input("tipo", _database.sql.VarChar, tipo_ut)
          //.input("lati",sql.VarChar,current_lat)
          //.input("lngi",sql.VarChar,current_lng)
          //.input("linea",sql.SmallInt,linea_ut)
          .input("id", id).query(_database.queries.updateunidad);
        case 8:
          result = _context3.sent;
          res.send(true);
          //res.json({placa_ut})    
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](2);
          res.status(500);
          res.send(false);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 12]]);
  }));
  return function updateUnidad(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteUnidad = exports.deleteUnidad = /*#__PURE__*/function () {
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
          return pool.request().input("Id", id).query(_database.queries.deleteunidad);
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
  return function deleteUnidad(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getUnidadesLinea = exports.getUnidadesLinea = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var lin, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          lin = req.params.lin;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("num", lin).query(_database.queries.getunidadesLinea);
        case 7:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](1);
          res.status(500);
          res.send(_context5.t0.message);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 11]]);
  }));
  return function getUnidadesLinea(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getUnidadDet = exports.getUnidadDet = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var placa, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          placa = req.params.placa;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("placa", placa).query(_database.queries.getunidadByplaca);
        case 7:
          result = _context6.sent;
          res.json(result.recordset[0]);
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
  return function getUnidadDet(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();