"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTarifa = exports.updatePasaje = exports.getTarifaapp = exports.getTarifaLinea = exports.getPasaje = exports.deleteTarifa = exports.deletePasaje = exports.addTarifa = exports.addPasaje = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
//------------------PASAJE-------------------
var getPasaje = exports.getPasaje = /*#__PURE__*/function () {
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
          return con.request().query(_querys.queries.getpasaje);
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
  return function getPasaje(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addPasaje = exports.addPasaje = /*#__PURE__*/function () {
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
          return con.request().input("tipo", _connection.sql.VarChar, req.body.tipo_pj).input("desc", _connection.sql.VarChar, req.body.descr_pj).query(_querys.queries.addpasaje);
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
  return function addPasaje(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updatePasaje = exports.updatePasaje = /*#__PURE__*/function () {
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
          return con.request().input("id", req.params.id).input("tipo", _connection.sql.VarChar, req.body.tipo_pj).input("desc", _connection.sql.VarChar, req.body.descr_pj).query(_querys.queries.updatepasaje);
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
  return function updatePasaje(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deletePasaje = exports.deletePasaje = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var con;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context4.sent;
          _context4.next = 6;
          return con.request().input("id", req.params.id).query(_querys.queries.delpasaje);
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
  return function deletePasaje(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//---------------TARIFA---------------------------------

/*export const getTarifas = async (req, res) => {
    try {
        const con = await getConnection()
        const resp = await con.request().query(queries.gettars)
        res.json(resp.recordset)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }}*/

var getTarifaLinea = exports.getTarifaLinea = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var con, resp;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context5.sent;
          _context5.next = 6;
          return con.request().input("line", req.params.linea).query(_querys.queries.gettarlinea);
        case 6:
          resp = _context5.sent;
          res.json(resp.recordset);
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
  return function getTarifaLinea(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getTarifaapp = exports.getTarifaapp = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var con, resp;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context6.sent;
          _context6.next = 6;
          return con.request().input("id", req.params.num).query(_querys.queries.gettaraap);
        case 6:
          resp = _context6.sent;
          res.json(resp.recordset);
          _context6.next = 14;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          res.send(false);
          console.log(_context6.t0.message);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function getTarifaapp(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var addTarifa = exports.addTarifa = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var con;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context7.sent;
          _context7.next = 6;
          return con.request().input("cost", _connection.sql.Float, req.body.costo).input("pasaj", _connection.sql.TinyInt, req.body.tpasaje).input("linea", _connection.sql.SmallInt, req.body.tlinea).query(_querys.queries.addtar);
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
  return function addTarifa(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var updateTarifa = exports.updateTarifa = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var con, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context8.sent;
          _context8.next = 6;
          return con.request().input("id", req.params.id).input("cost", _connection.sql.Float, req.body.costo).query(_querys.queries.updatetar);
        case 6:
          result = _context8.sent;
          if (result.rowsAffected != 0) {
            res.send(true);
          } else res.send(false);
          _context8.next = 14;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          res.send(false);
          console.log(_context8.t0.message);
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 10]]);
  }));
  return function updateTarifa(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteTarifa = exports.deleteTarifa = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var con, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context9.sent;
          _context9.next = 6;
          return con.request().input("id", req.params.id).query(_querys.queries.deltar);
        case 6:
          result = _context9.sent;
          if (result.rowsAffected != 0) res.send(true);else res.send(false);
          _context9.next = 14;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          res.send(false);
          console.log(_context9.t0.message);
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return function deleteTarifa(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();