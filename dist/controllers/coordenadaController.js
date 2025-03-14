"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCoordenada = exports.getCoordenada = exports.deleteCoordenada = exports.addCoordenada = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getCoordenada = exports.getCoordenada = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.getcoord);
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
  return function getCoordenada(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addCoordenada = exports.addCoordenada = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, coordId, lat_cor, lng_cor, parada_cor, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, coordId = _req$body.coordId, lat_cor = _req$body.lat_cor, lng_cor = _req$body.lng_cor, parada_cor = _req$body.parada_cor;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("idcoord", _database.sql.Int, coordId).input("latitud", _database.sql.VarChar, lat_cor).input("longitud", _database.sql.VarChar, lng_cor).input("parada", _database.sql.Int, parada_cor).query(_database.queries.addcoord);
        case 7:
          res.send(true);
          //res.json({parad})
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
  return function addCoordenada(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateCoordenada = exports.updateCoordenada = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, lat_cor, lng_cor, parada_cor, id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          //const {coordId,lat_cor,lng_cor,parada_cor}= req.body
          _req$body2 = req.body, lat_cor = _req$body2.lat_cor, lng_cor = _req$body2.lng_cor, parada_cor = _req$body2.parada_cor;
          id = req.params.id;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request()
          // .input("Id",sql.Int,coordId)
          .input("latitud", _database.sql.VarChar, lat_cor).input("longitud", _database.sql.VarChar, lng_cor).input("parada", _database.sql.Int, parada_cor).input("Id", id).query(_database.queries.updatecoord);
        case 8:
          result = _context3.sent;
          // res.json({parad})
          res.send(true);
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
  return function updateCoordenada(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteCoordenada = exports.deleteCoordenada = /*#__PURE__*/function () {
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
          return pool.request().input("Id", id).query(_database.queries.deletecoord);
        case 7:
          result = _context4.sent;
          res.send(true);
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          //res.status(500)
          res.send(false);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deleteCoordenada(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();