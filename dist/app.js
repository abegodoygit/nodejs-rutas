"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _user = _interopRequireDefault(require("./routes/user.route"));
//import paradasRoute from './routes/parada.route'

var app = (0, _express["default"])();
var cors = require('cors'); //para consumir api en desarrollo (solucionamos error de acceso al api) 
//settings
//let port=4200
app.set('port', _config["default"].port); //importamos el puerto desde el archivo config.js

//middlewares
app.use(_express["default"].json()); //config para recibir objetos en JSON
app.use(_express["default"].urlencoded({
  extended: false
})); //para recibir datos desde formularios html
app.use(cors());

//app.use(paradasRoute,paradasRoute)
app.use(_user["default"], _user["default"]);

//const cors = require('cors');
/*const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
*/
var _default = exports["default"] = app;