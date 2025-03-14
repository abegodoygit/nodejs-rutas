"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usersControllers = require("../controllers/users.controllers.js");
var _lineaController = require("../controllers/linea.controller.js");
var _busController = require("../controllers/bus.controller.js");
var _lugarController = require("../controllers/lugar.controller.js");
var _itinerarioController = require("../controllers/itinerario.controller.js");
var _paraderoController = require("../controllers/paradero.controller.js");
var _horarioController = require("../controllers/horario.controller.js");
var _tarifaController = require("../controllers/tarifa.controller.js");
var _destinoController = require("../controllers/destino.controller.js");
var _coordenadaController = require("../controllers/coordenada.controller.js");
var _rutaController = require("../controllers/ruta.controller.js");
var router = (0, _express.Router)();
router.get('/usuario', _usersControllers.getUsers); //si ingresa a esa ruta ejecuta la funcion getUser importado desde UsuarioController
router.get('/usuario/:id', _usersControllers.getbyId);
router.post('/usuario', _usersControllers.addUser);
//router.put('/usuario',updateUser)
router.put('/usuario/:id', _usersControllers.updateUser);
router["delete"]('/usuario/:id', _usersControllers.delUser);
router.get('/linea', _lineaController.getLinea);
router.get('/linea/:num', _lineaController.getLineaById);
router.post('/linea', _lineaController.addLinea);
router.put('/linea/:id', _lineaController.updateLinea);
router["delete"]('/linea/:id', _lineaController.deleteLinea);
router.get('/lineas', _lineaController.getLineaAll);
router.get('/bus', _busController.getBuses); // obtenemos todas las unidades
router.get('/bus/:placa', _busController.getBus); //obtenemos la unidad por placa
router.get('/buslinea/:lin', _busController.getBusLinea); // obtenemos todas las unidades de una linea
router.post('/bus', _busController.addBus);
router.put('/bus/:id', _busController.updateBus); //ponemos como parametro id la placa
router["delete"]('/bus/:id', _busController.deleteBus);
router.get('/lugar', _lugarController.getPlace);
router.post('/lugar', _lugarController.addPlace);
router.put('/lugar/:id', _lugarController.updatePlace);
router["delete"]('/lugar/:id', _lugarController.deletePlace);

//router.get('/itinerario',getItinerario)
router.get('/itinerario/:linea', _itinerarioController.getItinerLinea);
router.post('/itinerario', _itinerarioController.addItiner);
router.put('/itinerario/:id', _itinerarioController.updateItiner);
router["delete"]('/itinerario/:id', _itinerarioController.deleteItiner);
router.get('/parada', _paraderoController.getParadas);
router.post('/parada', _paraderoController.addParada);
router["delete"]('/parada/:id', _paraderoController.deleteParada);
router.put('/parada/:id', _paraderoController.updateParada);
router.get('/parada/:linea/:reco', _paraderoController.getParadaUbic); //requiere como parametro linea y recorrido

router.get('/dia', _horarioController.getDia);
router.post('/dia', _horarioController.addDia);
router.put('/dia/:id', _horarioController.updateDia);
router["delete"]('/dia/:id', _horarioController.deleteDia);

//router.get('/horario',getHorario)
router.get('/horario/:linea', _horarioController.getHorapp);
router.post('/horario', _horarioController.addHorario);
router.put('/horario/:id', _horarioController.updateHorario);
router["delete"]('/horario/:id', _horarioController.deleteHorario);
router.get('/pasaje', _tarifaController.getPasaje);
router.post('/pasaje', _tarifaController.addPasaje);
router.put('/pasaje/:id', _tarifaController.updatePasaje);
router["delete"]('/pasaje/:id', _tarifaController.deletePasaje);

//router.get('/tarifa',getTarifas)
router.get('/tarifa/:linea', _tarifaController.getTarifaLinea); //solo retorna de la tabla tarifa
router.get('/tarifaapp/:num', _tarifaController.getTarifaapp); //retorna pasaje y desc para mostrar
router.post('/tarifa', _tarifaController.addTarifa);
router.put('/tarifa/:id', _tarifaController.updateTarifa);
router["delete"]('/tarifa/:id', _tarifaController.deleteTarifa);
router.get('/zona', _destinoController.getZona);
router.post('/zona', _destinoController.addZona);
router.put('/zona/:id', _destinoController.updateZona);
router["delete"]('/zona/:id', _destinoController.deleteZona);
router.get('/destino', _destinoController.getDestinos); //todos los destinos
router.post('/destino', _destinoController.addDestino);
router.put('/destino/:id', _destinoController.updateDestino);
router["delete"]('/destino/:id', _destinoController.deleteDestino);
router.get('/destinos', _destinoController.getDestinoinner); //retorna nombre destino, zona y paradacerca
router.get('/destino/:id', _destinoController.searchdestin); //retorna destinos similares al buscado
router.get('/lineatodest/:id', _destinoController.lineastodestino); //lineas que van al destino

router.get('/coordenada', _coordenadaController.getCoordenada);
router.post('/coordenada', _coordenadaController.addCoordenada);
router.put('/coordenada/:id', _coordenadaController.updateCoordenada);
router["delete"]('/coordenada/:id', _coordenadaController.deleteCoordenada);

//router.get('/ruta',getRuta)
router.post('/ruta', _rutaController.addRuta);
router.put('/ruta/:id', _rutaController.updateRuta);
router["delete"]('/ruta/:id', _rutaController.deleteRuta);
router.get('/rutaapp/:lin/:rec', _rutaController.getRutaapp); //para app movil
router.get('/rutas/:lin', _rutaController.getRutaShow); //retorna solo las coordenadas de una ruta-para graficar
router.get('/rutaed/:lin/:rec', _rutaController.getRutaEdit);
router.get('/rutaad/:lin/:rec', _rutaController.getRutaAdd);
var _default = exports["default"] = router;