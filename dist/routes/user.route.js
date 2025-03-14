"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _coordenadaController = require("../controllers/coordenadaController");
var _destinoController = require("../controllers/destinoController");
var _diaController = require("../controllers/diaController");
var _zonaController = require("../controllers/zonaController");
var _horarioController = require("../controllers/horarioController");
var _lineaController = require("../controllers/lineaController");
var _parada = require("../controllers/parada.controller");
var _rutaController = require("../controllers/rutaController");
var _tarifaController = require("../controllers/tarifaController");
var _unidadController = require("../controllers/unidadController");
var _pasajeController = require("../controllers/pasajeController");
var _usuario = require("../controllers/usuario.controller");
var _itinerarioController = require("../controllers/itinerarioController");
var _placeController = require("../controllers/placeController");
var router = (0, _express.Router)();
/*router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });*/

router.get('/linea', _lineaController.getLinea);
router.get('/linea/:num', _lineaController.getLineaById);
router.post('/linea', _lineaController.addLinea);
router.put('/linea', _lineaController.updateLinea);
router["delete"]('/linea/:id', _lineaController.deleteLinea);
router.get('/lineas', _lineaController.getLineaAll);
router.get('/usuario', _usuario.getUser); //si ingresa a esa ruta ejecuta la funcion getUser importado desde UsuarioController
router.post('/usuario', _usuario.addUser);
router.get('/usuario/:user', _usuario.getUserById);
router["delete"]('/usuario/:user', _usuario.deleteUser);
router.put('/usuario', _usuario.updateUser);
router.get('/bus', _unidadController.getUnidad); // obtenemos todas las unidades
router.get('/bus/:placa', _unidadController.getUnidadDet); //obtenemos la unidad por placa
router.get('/bus/linea/:lin', _unidadController.getUnidadesLinea); // obtenemos todas las unidades de una linea
router.post('/bus', _unidadController.addUnidad);
router.put('/bus/:id', _unidadController.updateUnidad); //ponemos como parametro id la placa
router["delete"]('/bus/:id', _unidadController.deleteUnidad);
router.get('/lugar', _placeController.getPlace); //todos los lugares de itinerario
router.post('/lugar', _placeController.addPlace);
router.put('/lugar/:id', _placeController.updatePlace); //pasamos como param el id
router["delete"]('/lugar/:id', _placeController.deletePlace);
router.get('/itinerario', _itinerarioController.getItinerario); //todos la lista
router.get('/itinerario/:linea', _itinerarioController.getItinerByLinea); //itinerario por linea
router.post('/itinerario', _itinerarioController.addItinerario);
router.put('/itinerario/:id', _itinerarioController.updateItinerario);
router["delete"]('/itinerario/:id', _itinerarioController.deleteItinerario);
router.get('/paradas', _parada.getParadas);
router.post('/paradas', _parada.addParada);
//router.get('/paradas/:id',getParadaById)
router["delete"]('/paradas/:id', _parada.deleteParada);
router.put('/paradas/:id', _parada.updateParada);
router.get('/paradas/:linea/:reco', _parada.getParadaUbic); //requiere como parametro linea y recorrido

router.get('/ruta', _rutaController.getRuta);
router.post('/ruta', _rutaController.addRuta);
router.put('/ruta/:id', _rutaController.updateRuta);
router["delete"]('/ruta/:id', _rutaController.deleteRuta);
router.get('/rutaapp/:lin/:rec', _rutaController.getRutaapp); //para app movil
router.get('/rutas/:lin', _rutaController.getRutaShow); //retorna solo las coordenadas de una ruta-para graficar
router.get('/rutaed/:lin/:rec', _rutaController.getRutaEdit);
router.get('/rutaad/:lin/:rec', _rutaController.getRutaAdd);
router.get('/coordenada', _coordenadaController.getCoordenada);
router.post('/coordenada', _coordenadaController.addCoordenada);
router.put('/coordenada/:id', _coordenadaController.updateCoordenada);
router["delete"]('/coordenada/:id', _coordenadaController.deleteCoordenada);
router.get('/zona', _zonaController.getZona);
router.post('/zona', _zonaController.addZona);
router.put('/zona/:id', _zonaController.updateZona);
router["delete"]('/zona/:id', _zonaController.deleteZona);
router.get('/destino', _destinoController.getDestino);
router.post('/destino', _destinoController.addDestino);
router.put('/destino/:id', _destinoController.updateDestino);
router["delete"]('/destino/:id', _destinoController.deleteDestino);
router.get('/destinos', _destinoController.getDestinoinner); //retorna nombre destino, zona y paradacerca
router.get('/destino/:id', _destinoController.searchdestin); //retorna destinos similares al buscado
router.get('/lineatodest/:id', _destinoController.lineastodestino); //lineas que van al destino

router.get('/pasaje', _pasajeController.getPasaje);
router.post('/pasaje', _pasajeController.addPasaje);
router.put('/pasaje/:id', _pasajeController.updatePasaje);
router["delete"]('/pasaje/:id', _pasajeController.deletePasaje);
router.get('/tarifa', _tarifaController.getTarifa);
router.post('/tarifa', _tarifaController.addTarifa);
router["delete"]('/tarifa/:id', _tarifaController.deleteTarifa);
router.put('/tarifa/:id', _tarifaController.updateTarifa);
router.get('/tarifa/:linea', _tarifaController.getTarifaByLinea); //solo retorna de la tabla tarifa
router.get('/tarifaap/:num', _tarifaController.getTarifaap); //retorna pasaje y desc para mostrar

router.get('/dia', _diaController.getDia);
router.post('/dia', _diaController.addDia);
router.put('/dia/:id', _diaController.updateDia);
router["delete"]('/dia/:id', _diaController.deleteDia);
router.get('/horario', _horarioController.getHorario);
router.post('/horario', _horarioController.addHorario);
router.put('/horario/:id', _horarioController.updateHorario);
router["delete"]('/horario/:id', _horarioController.deleteHorario);
router.get('/horario/:num', _horarioController.getHorapp); //retorna hora y nombre del dia
var _default = exports["default"] = router;