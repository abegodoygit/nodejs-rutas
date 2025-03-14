"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDestino = exports.searchdestin = exports.lineastodestino = exports.getDestinoinner = exports.getDestino = exports.deleteDestino = exports.addDestino = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getDestino = exports.getDestino = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.getdestino);
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
  return function getDestino(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addDestino = exports.addDestino = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, nombre_des, zona_des, parada_des, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, nombre_des = _req$body.nombre_des, zona_des = _req$body.zona_des, parada_des = _req$body.parada_des;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("name", _database.sql.VarChar, nombre_des).input("zona", _database.sql.TinyInt, zona_des).input("parada", _database.sql.Int, parada_des).query(_database.queries.adddestino);
        case 7:
          res.send(true);
          //res.json({destin})
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
  return function addDestino(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateDestino = exports.updateDestino = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, nombre_des, zona_des, parada_des, id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, nombre_des = _req$body2.nombre_des, zona_des = _req$body2.zona_des, parada_des = _req$body2.parada_des;
          id = req.params.id;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request()
          //.input("Id",sql.Int,destinoId)
          .input("name", _database.sql.VarChar, nombre_des).input("zona", _database.sql.TinyInt, zona_des).input("parada", _database.sql.Int, parada_des).input("Id", id).query(_database.queries.updatedestino);
        case 8:
          result = _context3.sent;
          res.send(true);
          //res.json({destin})    
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
  return function updateDestino(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteDestino = exports.deleteDestino = /*#__PURE__*/function () {
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
          return pool.request().input("Id", id).query(_database.queries.deletedestino);
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
  return function deleteDestino(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getDestinoinner = exports.getDestinoinner = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().query(_database.queries.getdestinoinner);
        case 6:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 14;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getDestinoinner(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var searchdestin = exports.searchdestin = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          //const {search}= req.params;
          id = req.params.id;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("Id", id)
          //.query(queries.searchdestin)
          .query("select nombre_des,nombre_zn,nomb_pd,paraderId from Destino inner join Zona on Zona.zonaId=zona_des inner join Paradero on Paradero.paraderId=parada_des where nombre_des like '%%" + id + "%%'");
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
  return function searchdestin(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var lineastodestino = exports.lineastodestino = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context7.sent;
          _context7.next = 7;
          return pool.request().input("Id", id).query(_database.queries.getlineastodestin);
        case 7:
          result = _context7.sent;
          //.query("select nombre_des,nombre_zn,nomb_pd,paraderId from Destino inner join Zona on Zona.zonaId=zona_des inner join Paradero on Paradero.paraderId=parada_des where nombre_des like '%%"+id+"%%'")  
          res.json(result.recordset);
          _context7.next = 15;
          break;
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](1);
          res.status(500);
          res.send(_context7.t0.message);
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 11]]);
  }));
  return function lineastodestino(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();