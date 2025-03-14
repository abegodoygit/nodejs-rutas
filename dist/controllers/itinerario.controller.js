"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateItiner = exports.getItinerLinea = exports.deleteItiner = exports.addItiner = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
/*export const getItinerario=async (req,res)=>{
    try {
        const poo=await getConnection()
        const resp=await poo.request().query(queries.getitiner)
        res.json(resp.recordset)
        
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}*/

var getItinerLinea = exports.getItinerLinea = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, resul;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().input("line", req.params.linea).query(_querys.queries.getitinerlinea);
        case 6:
          resul = _context.sent;
          res.json(resul.recordset);
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
  return function getItinerLinea(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addItiner = exports.addItiner = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context2.sent;
          _context2.next = 6;
          return pool.request().input("reco", _connection.sql.TinyInt, req.body.recorrido_it).input("orde", _connection.sql.SmallInt, req.body.orden_it).input("linea", _connection.sql.SmallInt, req.body.linea_it).input("lugar", _connection.sql.Int, req.body.lugar_it).query(_querys.queries.additiner);
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
  return function addItiner(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateItiner = exports.updateItiner = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input("id", req.params.id).input("ureco", _connection.sql.TinyInt, req.body.recorrido_it).input("uorde", _connection.sql.SmallInt, req.body.orden_it).input("ulinea", _connection.sql.SmallInt, req.body.linea_it).input("ulugar", _connection.sql.Int, req.body.lugar_it).query(_querys.queries.updateitiner);
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
  return function updateItiner(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteItiner = exports.deleteItiner = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().input("id", req.params.id).query(_querys.queries.deleteitiner);
        case 6:
          res.send(true);
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.send(false);
          console.log(_context4.t0.message);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function deleteItiner(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();