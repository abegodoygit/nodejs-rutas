"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateParada = exports.getParadas = exports.getParadaUbic = exports.deleteParada = exports.addParada = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
//import querys from '../database/querys'

var getParadas = exports.getParadas = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.getParadas);
        case 6:
          result = _context.sent;
          //hacemos la peticion y consulta
          // console.log(result)
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
  return function getParadas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addParada = exports.addParada = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var nomb_pd, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          nomb_pd = req.body.nomb_pd;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("nombrepd", _database.sql.VarChar, nomb_pd)
          //.input("latpd",sql.VarChar,lat_pd)
          // .input("lngpd",sql.VarChar,lng_pd)   
          .query(_database.queries.addParada);
        case 7:
          //importamos la consulta desde querys.js
          //.query('Insert into Paradero(paradaId,nomParada,description) values(@paradaId,@nomParada,@description)')
          res.send(true);
          //res.json({nomParada})
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
  return function addParada(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/*
export const addParada=async(req,res)=>{
    const {nombre_pd,lat_pd,lng_pd}= req.body
    try {
    const pool= await getConnection() 
     await pool.request()
   //.input("paradaId",sql.Int,188)
   .input("nombrepd",sql.VarChar,nombre_pd)
   .input("latpd",sql.VarChar,lat_pd)
   .input("lngpd",sql.VarChar,lng_pd)   
   .query(queries.addParada)//importamos la consulta desde querys.js
   //.query('Insert into Paradero(paradaId,nomParada,description) values(@paradaId,@nomParada,@description)')
    res.send(true)
    //res.json({nomParada})
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}
*/

/*export const getParadaById=async(req,res)=>{
const {id}= req.params;
try {
    const pool= await getConnection()
 const result= await pool.request()
 .input("Id",id)
 .query(queries.getParadaByid)
 //console.log(result)
 //res.json(result.recordset)
 res.send(result.recordset[0]) 
} catch (error) {
    res.status(500)
    res.send(false)
 }    
}*/

var deleteParada = exports.deleteParada = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input("Id", id).query(_database.queries.delParada);
        case 7:
          result = _context3.sent;
          //console.log(result)
          //res.json(result.recordset)
          res.send(true);
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          // res.status(500)
          res.send(false);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 11]]);
  }));
  return function deleteParada(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateParada = exports.updateParada = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var nomb_pd, id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          nomb_pd = req.body.nomb_pd; //const {paradaId,nomParada,description}= req.body
          id = req.params.id;
          _context4.prev = 2;
          _context4.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context4.sent;
          _context4.next = 8;
          return pool.request()
          //.input("Id",sql.Int,paradId)   
          .input("nombrepd", _database.sql.VarChar, nomb_pd).input("Id", id)
          //.input("latpd",sql.VarChar,lat_pd)
          // .input("lngpd",sql.VarChar,lng_pd)         
          .query(_database.queries.updateParad);
        case 8:
          result = _context4.sent;
          //console.log(status)
          res.send(true);
          //res.json({id,nomParada})
          _context4.next = 16;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](2);
          res.status(500);
          res.send(false);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return function updateParada(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getParadaUbic = exports.getParadaUbic = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$params, linea, reco, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          //solicitamos el nombre y su ubicacion
          _req$params = req.params, linea = _req$params.linea, reco = _req$params.reco;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("lin", linea).input("rec", reco).query(_database.queries.getParadaUbic);
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
  return function getParadaUbic(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// npm run dev