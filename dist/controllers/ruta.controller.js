"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRuta = exports.getRutaapp = exports.getRutaShow = exports.getRutaEdit = exports.getRutaAdd = exports.deleteRuta = exports.addRuta = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
/*export const getRuta=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getruta)  
    res.json(result.recordset) 
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}*/

var addRuta = exports.addRuta = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, orden, recorrido, esparada, coord, linea, pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, orden = _req$body.orden, recorrido = _req$body.recorrido, esparada = _req$body.esparada, coord = _req$body.coord, linea = _req$body.linea;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("numorden", _connection.sql.SmallInt, orden).input("recorrid", _connection.sql.TinyInt, recorrido).input("paradaes", _connection.sql.VarChar, esparada).input("coordenada", _connection.sql.Int, coord).input("rlinea", _connection.sql.SmallInt, linea).query(_querys.queries.addruta);
        case 7:
          res.send(true);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          res.send(false);
          console.log(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  }));
  return function addRuta(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateRuta = exports.updateRuta = /*#__PURE__*/function () {
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
          return pool.request().input("numorden", _connection.sql.SmallInt, req.body.orden).input("coordenada", _connection.sql.Int, req.body.coord).input("id", req.params.id).query(_querys.queries.updateruta);
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
  return function updateRuta(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteRuta = exports.deleteRuta = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, resp;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input("id", req.params.id).query(_querys.queries.delruta);
        case 6:
          resp = _context3.sent;
          if (resp.rowsAffected != 0) res.send(true);else res.send(false);
          //res.send(true)    
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.send(false);
          console.log(_context3.t0.message);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function deleteRuta(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//obtenemos ruta de una linea especifica para graficar
var getRutaShow = exports.getRutaShow = /*#__PURE__*/function () {
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
          return pool.request().input("idlin", req.params.lin).query(_querys.queries.getrutashow);
        case 6:
          result = _context4.sent;
          res.json(result.recordset);
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
  return function getRutaShow(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
//obtenemos ruta de una linea y recorrido especifico para editar
var getRutaEdit = exports.getRutaEdit = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$params, lin, rec, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$params = req.params, lin = _req$params.lin, rec = _req$params.rec;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("idlin", lin).input("reco", rec).query(_querys.queries.getrutaedit);
        case 7:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](1);
          res.send(false);
          console.log(_context5.t0.message);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 11]]);
  }));
  return function getRutaEdit(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//obtenemos solo el id de una ruta de una linea y recorrido especifico para agregar

var getRutaAdd = exports.getRutaAdd = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$params2, lin, rec, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$params2 = req.params, lin = _req$params2.lin, rec = _req$params2.rec;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("idlin", lin).input("reco", rec).query(_querys.queries.getrutaadd);
        case 7:
          result = _context6.sent;
          res.json(result.recordset);
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](1);
          res.send(false);
          console.log(_context6.t0.message);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 11]]);
  }));
  return function getRutaAdd(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

//obtenemos ruta de una linea especifica para graficar en APP
var getRutaapp = exports.getRutaapp = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$params3, lin, rec, pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$params3 = req.params, lin = _req$params3.lin, rec = _req$params3.rec;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context7.sent;
          _context7.next = 7;
          return pool.request().input("idlin", lin).input("reco", rec).query(_querys.queries.getrutaapp);
        case 7:
          result = _context7.sent;
          res.json(result.recordset);
          _context7.next = 15;
          break;
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](1);
          res.send(false);
          console.log(_context7.t0.message);
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 11]]);
  }));
  return function getRutaapp(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();