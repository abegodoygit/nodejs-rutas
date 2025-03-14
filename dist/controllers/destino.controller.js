"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateZona = exports.updateDestino = exports.searchdestin = exports.lineastodestino = exports.getZona = exports.getDestinos = exports.getDestinoinner = exports.deleteZona = exports.deleteDestino = exports.addZona = exports.addDestino = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
//------------------ZONA-------------------
var getZona = exports.getZona = /*#__PURE__*/function () {
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
          return con.request().query(_querys.queries.getzona);
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
  return function getZona(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addZona = exports.addZona = /*#__PURE__*/function () {
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
          return con.request().input("name", _connection.sql.VarChar, req.body.nombre_zn).query(_querys.queries.addzona);
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
  return function addZona(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateZona = exports.updateZona = /*#__PURE__*/function () {
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
          return con.request().input("id", req.params.id).input("name", _connection.sql.VarChar, req.body.nombre_zn).query(_querys.queries.updatezona);
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
  return function updateZona(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteZona = exports.deleteZona = /*#__PURE__*/function () {
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
          return con.request().input("id", req.params.id).query(_querys.queries.delzona);
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
  return function deleteZona(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//---------------DESTINO---------------------------------

var getDestinos = exports.getDestinos = /*#__PURE__*/function () {
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
          return con.request().query(_querys.queries.getdestino);
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
  return function getDestinos(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var addDestino = exports.addDestino = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var con;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context6.sent;
          _context6.next = 6;
          return con.request().input("name", _connection.sql.VarChar, req.body.nombre_des).input("zona", _connection.sql.TinyInt, req.body.zona_des).input("parada", _connection.sql.Int, req.body.parada_des).query(_querys.queries.adddestino);
        case 6:
          res.send(true);
          _context6.next = 13;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          res.send(false);
          console.log(_context6.t0.message);
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return function addDestino(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var updateDestino = exports.updateDestino = /*#__PURE__*/function () {
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
          return con.request().input("id", req.params.id).input("name", _connection.sql.VarChar, req.body.nombre_des).input("zona", _connection.sql.TinyInt, req.body.zona_des).input("parada", _connection.sql.Int, req.body.parada_des).query(_querys.queries.updatedestino);
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
  return function updateDestino(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteDestino = exports.deleteDestino = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var con, resp;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          con = _context8.sent;
          _context8.next = 6;
          return con.request().input("id", req.params.id).query(_querys.queries.deldestino);
        case 6:
          resp = _context8.sent;
          if (resp.rowsAffected != 0) res.send(true);else res.send(false);
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
  return function deleteDestino(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getDestinoinner = exports.getDestinoinner = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context9.sent;
          _context9.next = 6;
          return pool.request().query(_querys.queries.getdestinoinner);
        case 6:
          result = _context9.sent;
          res.json(result.recordset);
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
  return function getDestinoinner(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var searchdestin = exports.searchdestin = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = req.params.id;
          _context10.prev = 1;
          _context10.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context10.sent;
          _context10.next = 7;
          return pool.request().input("id", id)
          //.query(queries.searchdestin)
          .query("select nombre_des,nombre_zn,nomb_pd,paraderId from Destino inner join Zona on Zona.zonaId=zona_des inner join Paradero on Paradero.paraderId=parada_des where nombre_des like '%%" + id + "%%'");
        case 7:
          result = _context10.sent;
          res.json(result.recordset);
          _context10.next = 15;
          break;
        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](1);
          res.send(false);
          console.log(_context10.t0.message);
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 11]]);
  }));
  return function searchdestin(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var lineastodestino = exports.lineastodestino = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context11.sent;
          _context11.next = 6;
          return pool.request().input("id", req.params.id).query(_querys.queries.getlineastodestin);
        case 6:
          result = _context11.sent;
          res.json(result.recordset);
          _context11.next = 14;
          break;
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](0);
          res.send(false);
          console.log(_context11.t0.message);
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 10]]);
  }));
  return function lineastodestino(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();