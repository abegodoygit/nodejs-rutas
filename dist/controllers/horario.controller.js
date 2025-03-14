"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateHorario = exports.updateDia = exports.getHorapp = exports.getDia = exports.deleteHorario = exports.deleteDia = exports.addHorario = exports.addDia = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
//------Dia de Servicio------------------
var getDia = exports.getDia = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getdia);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
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
  return function getDia(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addDia = exports.addDia = /*#__PURE__*/function () {
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
          return pool.request().input("day", _connection.sql.VarChar, req.body.nombre_ds).query(_querys.queries.adddia);
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
  return function addDia(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateDia = exports.updateDia = /*#__PURE__*/function () {
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
          return pool.request().input("day", _connection.sql.VarChar, req.body.nombre_ds).input("id", req.params.id).query(_querys.queries.updatedia);
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
  return function updateDia(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteDia = exports.deleteDia = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().input("id", req.params.id).query(_querys.queries.deletedia);
        case 6:
          result = _context4.sent;
          res.send(true);
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
  return function deleteDia(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//--------------Horario de Servicio----------
/*
export const getHorario=async(req,res)=>{
    try {
        const pool= await getConnection()
        const result= await pool.request().query(queries.gethorar)
        res.json(result.recordset) 
    } catch (error) {
        res.send(false)
        console.log(error.message) 
    }
}*/
var getHorapp = exports.getHorapp = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().input("id", req.params.linea).query(_querys.queries.gethorapp);
        case 6:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 14;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.send(false);
          console.log(_context5.t0.message);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getHorapp(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var addHorario = exports.addHorario = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, HoraInicio, HoraFinal, hdia, hlinea, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body = req.body, HoraInicio = _req$body.HoraInicio, HoraFinal = _req$body.HoraFinal, hdia = _req$body.hdia, hlinea = _req$body.hlinea;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("inicio", _connection.sql.VarChar, HoraInicio).input("fin", _connection.sql.VarChar, HoraFinal).input("dia", _connection.sql.TinyInt, hdia).input("linea", _connection.sql.SmallInt, hlinea).query(_querys.queries.addhorar);
        case 7:
          res.send(true);
          _context6.next = 14;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](1);
          res.send(false);
          console.log(_context6.t0.message);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 10]]);
  }));
  return function addHorario(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var updateHorario = exports.updateHorario = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var pool;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context7.sent;
          _context7.next = 6;
          return pool.request().input("inicio", _connection.sql.VarChar, req.body.HoraInicio).input("fin", _connection.sql.VarChar, req.body.HoraFinal).input("id", req.params.id).query(_querys.queries.updatehorar);
        case 6:
          res.send(true);
          _context7.next = 13;
          break;
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          res.send(false);
          console.log(_context7.t0.message);
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 9]]);
  }));
  return function updateHorario(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteHorario = exports.deleteHorario = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var pool;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context8.sent;
          _context8.next = 6;
          return pool.request().input("id", req.params.id).query(_querys.queries.delhorar);
        case 6:
          res.send(true);
          _context8.next = 13;
          break;
        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          res.send(false);
          console.log(_context8.t0.message);
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return function deleteHorario(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();