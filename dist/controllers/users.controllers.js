"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getbyId = exports.getUsers = exports.delUser = exports.addUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
/*export const getUser=(req, res)=>{
    res.send('lista de usuarios')
}*/

var getUsers = exports.getUsers = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getusers);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.send(_context.t0.message);
          //console.log(error.message) 
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var delUser = exports.delUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("id", id).query(_querys.queries.deleteuser);
        case 7:
          result = _context2.sent;
          if (result.rowsAffected != 0) res.send(true);else res.send(false);
          //console.log('usuario eliminado')
          _context2.next = 14;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          res.send(false);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function delUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getbyId = exports.getbyId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input("id", id).query(_querys.queries.getuserByid);
        case 7:
          result = _context3.sent;
          //console.log(result)
          //const find=result.recordset[0]
          res.json(result.recordset);
          /* if(find!=null){
               res.json(find)
           }else{
              res.send(false)
              console.log('Usuario no encontrado')
           }*/
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          res.send(false);
          console.log(_context3.t0);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function getbyId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var addUser = exports.addUser = /*#__PURE__*/function () {
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
          return pool.request().input("user", _connection.sql.VarChar, req.body.usuar).input("pass", _connection.sql.VarChar, req.body.clave).input("name", _connection.sql.VarChar, req.body.nombre).input("lname", _connection.sql.VarChar, req.body.apellidos).input("email", _connection.sql.VarChar, req.body.correo).input("photo", _connection.sql.VarChar, req.body.foto).input("cuenta", _connection.sql.VarChar, req.body.tipo_cuenta).query(_querys.queries.adduser);
        case 6:
          //res.json({nombre})
          //res.json(result.)
          res.send(true);
          console.log('usuario registrado');
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          //res.status(500)
          // res.send(error.message) 
          res.send(false);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function addUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateUser = exports.updateUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id; //const {usuar,clave,nombre,apellidos,correo,foto,tipo_cuenta}= req.body 
          _context5.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("id", id).input("user", _connection.sql.VarChar, req.body.usuar).input("pass", _connection.sql.VarChar, req.body.clave).input("name", _connection.sql.VarChar, req.body.nombre).input("lname", _connection.sql.VarChar, req.body.apellidos).input("email", _connection.sql.VarChar, req.body.correo).input("photo", _connection.sql.VarChar, req.body.foto).input("cuenta", _connection.sql.VarChar, req.body.tipo_cuenta)
          //.input("Usu",sql.VarChar,user)     
          .query(_querys.queries.updateuser);
        case 7:
          res.send(true);
          console.log('usuario modificado');
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          res.send(false);
          //res.send(error.message) 
          console.log('Nombre de usuario ya existe!');
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function updateUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
/*
export const addUser=(req,res)=>{
    
   console.log(request.body)
   res.send('usuario creado'+req.body)
   res.json(request.body.clave)
    /*try{
        // const {usuar,clave,nombre,apellidos,correo,foto,tipo_cuenta}=req.body
        const pool=await getConnection()
        await pool.request()
        .input("user",sql.VarChar,req.body.usuar)
        .input("pass", sql.VarChar,req.body.clave)
        .input("name", sql.VarChar,req.body.nombre)
        .input("lname", sql.VarChar,req.body.apellidos)
        .input("email", sql.VarChar,req.body.correo)
        .input("photo", sql.VarChar,req.body.foto)
        .input("cuenta", sql.VarChar,req.body.tipo_cuenta)
        .query(queries.adduser)

        res.send(true)
    }catch(error){
        res.send(error.message)
    }*
    
}
*/
/*
export const getUserById=async(req,res)=>{
    const {user}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("Usu",user)
     .query(queries.getuserByid)  
     res.send(result.recordset[0])
    } catch (error) {
        res.send(false) 
     }  
}*/

/*export const deleteUser=async(req,res)=>{
    const {user}= req.params;
    try {
        const pool= await getConnection() 
     const result= await pool.request()
     .input("Usu",user)
     .query(queries.deleteuser)
         res.send(true)
    } catch (error) {
        res.send(false) 
     }   
}*/