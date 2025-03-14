"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateItinerario = exports.getItinerario = exports.getItinerByLinea = exports.deleteItinerario = exports.addItinerario = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getItinerario = exports.getItinerario = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.getitiner);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
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
  return function getItinerario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getItinerByLinea = exports.getItinerByLinea = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var linea, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          linea = req.params.linea;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("line", linea).query(_database.queries.getitinerlinea);
        case 7:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 14;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          res.send(false);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return function getItinerByLinea(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/*
export const addItinerario=async(req,res)=>{
    const {recorrido_it,orden_it,nombre_it,lat_it,lng_it,linea_it}= req.body
    try {
        const pool= await getConnection() 
     await pool.request()   
   .input("reco",sql.TinyInt,recorrido_it)
   .input("orde",sql.SmallInt,orden_it) 
   .input("name",sql.VarChar,nombre_it)
   .input("lati",sql.VarChar,lat_it) 
   .input("longi",sql.VarChar,lng_it)
   .input("linea",sql.SmallInt,linea_it) 
   .query(queries.additiner)

    res.send(true)
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}*/

var addItinerario = exports.addItinerario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, recorrido_it, orden_it, linea_it, lugar_it, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, recorrido_it = _req$body.recorrido_it, orden_it = _req$body.orden_it, linea_it = _req$body.linea_it, lugar_it = _req$body.lugar_it;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input("reco", _database.sql.TinyInt, recorrido_it).input("orde", _database.sql.SmallInt, orden_it).input("linea", _database.sql.SmallInt, linea_it).input("lugar", _database.sql.Int, lugar_it).query(_database.queries.additiner);
        case 7:
          res.send(true);
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          res.send(false);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function addItinerario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/*
export const updateItinerario=async(req,res)=>{
    const {itnerarioId,recorrido_it,orden_it,nombre_it,lat_it,lng_it,linea_it}= req.body
    //const {id}= req.params;
    try {
    const pool= await getConnection() 
    const result= await pool.request()
    .input("Id",sql.Int,itnerarioId)
    .input("reco",sql.TinyInt,recorrido_it)
   .input("orde",sql.SmallInt,orden_it) 
   .input("name",sql.VarChar,nombre_it)
   .input("lati",sql.VarChar,lat_it) 
   .input("longi",sql.VarChar,lng_it)
   .input("linea",sql.SmallInt,linea_it)  
     .query(queries.updateitiner)
     
     res.send(true)    
    } catch (error) {
         res.status(500)
         res.send(false)
     }  
}*/

var updateItinerario = exports.updateItinerario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, recorrido_it, orden_it, linea_it, lugar_it, id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, recorrido_it = _req$body2.recorrido_it, orden_it = _req$body2.orden_it, linea_it = _req$body2.linea_it, lugar_it = _req$body2.lugar_it;
          id = req.params.id;
          _context4.prev = 2;
          _context4.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context4.sent;
          _context4.next = 8;
          return pool.request()
          //.input("Id",sql.Int,itnerarioId)
          .input("ureco", _database.sql.TinyInt, recorrido_it).input("uorde", _database.sql.SmallInt, orden_it).input("ulinea", _database.sql.SmallInt, linea_it).input("ulugar", _database.sql.VarChar, lugar_it).input("id", id).query(_database.queries.updateitiner);
        case 8:
          result = _context4.sent;
          res.send(true);
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](2);
          res.send(false);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return function updateItinerario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteItinerario = exports.deleteItinerario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("Id", id).query(_database.queries.deleteitiner);
        case 7:
          res.send(true);
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          //res.status(500)
          res.send(false);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return function deleteItinerario(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();