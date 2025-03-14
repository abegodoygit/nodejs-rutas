"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLinea = exports.getLineaById = exports.getLineaAll = exports.getLinea = exports.deleteLinea = exports.addLinea = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
//import {sql, getConnection,queries} from '../database'

var getLinea = exports.getLinea = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getlinea);
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
  return function getLinea(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addLinea = exports.addLinea = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, numero, name_emp, desc_emp, img_emp, tel_emp, email_emp, direc_emp, cant_unidades, color_emp, ubic_lat, ubic_lng, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, numero = _req$body.numero, name_emp = _req$body.name_emp, desc_emp = _req$body.desc_emp, img_emp = _req$body.img_emp, tel_emp = _req$body.tel_emp, email_emp = _req$body.email_emp, direc_emp = _req$body.direc_emp, cant_unidades = _req$body.cant_unidades, color_emp = _req$body.color_emp, ubic_lat = _req$body.ubic_lat, ubic_lng = _req$body.ubic_lng;
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("number", _connection.sql.SmallInt, numero).input("name", _connection.sql.VarChar, name_emp).input("desc", _connection.sql.VarChar, desc_emp).input("img", _connection.sql.VarChar, img_emp).input("phone", _connection.sql.VarChar, tel_emp).input("mail", _connection.sql.VarChar, email_emp).input("address", _connection.sql.VarChar, direc_emp).input("canti", _connection.sql.SmallInt, cant_unidades).input("colores", _connection.sql.VarChar, color_emp).input("lati", _connection.sql.VarChar, ubic_lat).input("lngi", _connection.sql.VarChar, ubic_lng).query(_querys.queries.addlinea);
        case 7:
          res.send(true);
          //res.json({name_emp})
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send(false);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function addLinea(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateLinea = exports.updateLinea = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, _req$body2, numero, name_emp, desc_emp, img_emp, tel_emp, email_emp, direc_emp, cant_unidades, color_emp, ubic_lat, ubic_lng, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _req$body2 = req.body, numero = _req$body2.numero, name_emp = _req$body2.name_emp, desc_emp = _req$body2.desc_emp, img_emp = _req$body2.img_emp, tel_emp = _req$body2.tel_emp, email_emp = _req$body2.email_emp, direc_emp = _req$body2.direc_emp, cant_unidades = _req$body2.cant_unidades, color_emp = _req$body2.color_emp, ubic_lat = _req$body2.ubic_lat, ubic_lng = _req$body2.ubic_lng;
          _context3.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request().input("id", id).input("number", _connection.sql.Int, numero).input("name", _connection.sql.VarChar, name_emp).input("desc", _connection.sql.VarChar, desc_emp).input("img", _connection.sql.VarChar, img_emp).input("phone", _connection.sql.VarChar, tel_emp).input("mail", _connection.sql.VarChar, email_emp).input("address", _connection.sql.VarChar, direc_emp).input("canti", _connection.sql.SmallInt, cant_unidades).input("colores", _connection.sql.VarChar, color_emp).input("lati", _connection.sql.VarChar, ubic_lat).input("lngi", _connection.sql.VarChar, ubic_lng).query(_querys.queries.updatelinea);
        case 8:
          res.send(true);
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          //res.status(500)
          res.send(false);
          console.log(_context3.t0.message);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 11]]);
  }));
  return function updateLinea(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteLinea = exports.deleteLinea = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input("id", id).query(_querys.queries.deletelinea);
        case 7:
          result = _context4.sent;
          if (result.rowsAffected != 0) res.send(true);else res.send(false);
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          //res.status(500)
          res.send(false);
          console.log(_context4.t0.message);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deleteLinea(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getLineaById = exports.getLineaById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var num, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          num = req.params.num;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("Id", num).query(_querys.queries.getlineaByid);
        case 7:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](1);
          res.send(false);
          //res.status(500)
          console.log(_context5.t0.message);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 11]]);
  }));
  return function getLineaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getLineaAll = exports.getLineaAll = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context6.sent;
          _context6.next = 6;
          return pool.request().query(_querys.queries.getlineaall);
        case 6:
          result = _context6.sent;
          res.json(result.recordset);
          _context6.next = 14;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          res.status(500);
          res.send(_context6.t0.message);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function getLineaAll(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();