import { Router } from "express";
/*import { addCoordenada, deleteCoordenada, getCoordenada, updateCoordenada } from "../controllers/coordenadaController";
import { addDestino, deleteDestino, getDestino, getDestinoinner, lineastodestino, searchdestin, updateDestino } from "../controllers/destinoController";
import { addDia, deleteDia, getDia, updateDia } from "../controllers/diaController";
import { addZona, deleteZona, getZona, updateZona } from "../controllers/zonaController";
import { addHorario, deleteHorario, getHorario, getHorapp, updateHorario } from "../controllers/horarioController";
import { addLinea, deleteLinea, getLinea, getLineaAll, getLineaById, updateLinea } from "../controllers/lineaController";
import {addParada, getParadas, deleteParada, updateParada,getParadaUbic} from "../controllers/parada.controller";

import { addRuta, deleteRuta, getRuta, getRutaAdd, getRutaapp, getRutaEdit, getRutaShow, updateRuta } from "../controllers/rutaController";
import { addTarifa, deleteTarifa, getTarifa, getTarifaByLinea, getTarifaap, updateTarifa } from "../controllers/tarifaController";
import { addUnidad, deleteUnidad, getUnidad, getUnidadById, getUnidadDet, getUnidadesLinea, updateUnidad } from "../controllers/unidadController";
import { addPasaje, deletePasaje, getPasaje, updatePasaje} from "../controllers/pasajeController";
import { addUser, deleteUser, getUser, getUserById, updateUser} from "../controllers/usuario.controller";
import { addItinerario, deleteItinerario, getItinerario, getItinerByLinea, updateItinerario } from "../controllers/itinerarioController";
import{getPlace,addPlace,updatePlace,deletePlace} from "../controllers/placeController";
const router=Router()
/*router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });*/
/*
router.get('/linea',getLinea)
router.get('/linea/:num',getLineaById)
router.post('/linea',addLinea)
router.put('/linea',updateLinea)
router.delete('/linea/:id',deleteLinea)
router.get('/lineas',getLineaAll)

router.get('/usuario',getUser) //si ingresa a esa ruta ejecuta la funcion getUser importado desde UsuarioController
router.post('/usuario',addUser)
router.get('/usuario/:user',getUserById)
router.delete('/usuario/:user',deleteUser)
router.put('/usuario',updateUser)

router.get('/bus',getUnidad)// obtenemos todas las unidades
router.get('/bus/:placa',getUnidadDet)//obtenemos la unidad por placa
router.get('/bus/linea/:lin',getUnidadesLinea) // obtenemos todas las unidades de una linea
router.post('/bus',addUnidad)
router.put('/bus/:id',updateUnidad)//ponemos como parametro id la placa
router.delete('/bus/:id',deleteUnidad)

router.get('/lugar',getPlace)//todos los lugares de itinerario
router.post('/lugar',addPlace)
router.put('/lugar/:id',updatePlace)//pasamos como param el id
router.delete('/lugar/:id',deletePlace)

router.get('/itinerario',getItinerario)//todos la lista
router.get('/itinerario/:linea',getItinerByLinea)//itinerario por linea
router.post('/itinerario',addItinerario)
router.put('/itinerario/:id',updateItinerario)
router.delete('/itinerario/:id',deleteItinerario)

router.get('/paradas',getParadas)
router.post('/paradas',addParada)
//router.get('/paradas/:id',getParadaById)
router.delete('/paradas/:id',deleteParada)
router.put('/paradas/:id',updateParada)
router.get('/paradas/:linea/:reco',getParadaUbic)//requiere como parametro linea y recorrido

router.get('/ruta',getRuta)
router.post('/ruta',addRuta)
router.put('/ruta/:id',updateRuta)
router.delete('/ruta/:id',deleteRuta)
router.get('/rutaapp/:lin/:rec',getRutaapp)//para app movil
router.get('/rutas/:lin',getRutaShow)//retorna solo las coordenadas de una ruta-para graficar
router.get('/rutaed/:lin/:rec',getRutaEdit)
router.get('/rutaad/:lin/:rec',getRutaAdd)

router.get('/coordenada',getCoordenada)
router.post('/coordenada',addCoordenada)
router.put('/coordenada/:id',updateCoordenada)
router.delete('/coordenada/:id',deleteCoordenada)

router.get('/zona',getZona)
router.post('/zona',addZona)
router.put('/zona/:id',updateZona)
router.delete('/zona/:id',deleteZona)

router.get('/destino',getDestino)
router.post('/destino',addDestino)
router.put('/destino/:id',updateDestino)
router.delete('/destino/:id',deleteDestino)
router.get('/destinos',getDestinoinner)//retorna nombre destino, zona y paradacerca
router.get('/destino/:id',searchdestin)//retorna destinos similares al buscado
router.get('/lineatodest/:id',lineastodestino)//lineas que van al destino

router.get('/pasaje',getPasaje)
router.post('/pasaje',addPasaje)
router.put('/pasaje/:id',updatePasaje)
router.delete('/pasaje/:id',deletePasaje)

router.get('/tarifa',getTarifa)
router.post('/tarifa',addTarifa)
router.delete('/tarifa/:id',deleteTarifa)
router.put('/tarifa/:id',updateTarifa)
router.get('/tarifa/:linea',getTarifaByLinea)//solo retorna de la tabla tarifa
router.get('/tarifaap/:num',getTarifaap)//retorna pasaje y desc para mostrar


router.get('/dia',getDia)
router.post('/dia',addDia)
router.put('/dia/:id',updateDia)
router.delete('/dia/:id',deleteDia)



router.get('/horario',getHorario)
router.post('/horario',addHorario)
router.put('/horario/:id',updateHorario)
router.delete('/horario/:id',deleteHorario)
router.get('/horario/:num',getHorapp)//retorna hora y nombre del dia


*/
















//export default router