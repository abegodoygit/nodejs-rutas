import {Router} from 'express';
import { addUser, deleteUser, getUser, getUserById, updateUser} from "../controllers/usuario.controller";
//import { addUser, delUser, getbyId, getUsers, updateUser } from '../controllers/users.controllers.js';
import { addLinea, deleteLinea, getLinea, getLineaAll, getLineaById, updateLinea } from '../controllers/linea.controller.js';
import { addBus, deleteBus, getBus, getBuses, getBusLinea, updateBus } from '../controllers/bus.controller.js';
import { addPlace, deletePlace, getPlace, updatePlace } from '../controllers/lugar.controller.js';
import { addItiner, deleteItiner, getItinerLinea, updateItiner } from '../controllers/itinerario.controller.js';
import { addParada, deleteParada, getParadas, getParadaUbic, updateParada } from '../controllers/paradero.controller.js';
import { addDia, addHorario, deleteDia, deleteHorario, getDia, getHorapp, updateDia, updateHorario } from '../controllers/horario.controller.js';
import { addPasaje, addTarifa, deletePasaje, deleteTarifa, getPasaje, getTarifaapp, getTarifaLinea, updatePasaje, updateTarifa } from '../controllers/tarifa.controller.js';
import { addDestino, addZona, deleteDestino, deleteZona, getDestinoinner, getDestinos, getZona, lineastodestino, searchdestin, updateDestino, updateZona } from '../controllers/destino.controller.js';
import { addCoordenada, deleteCoordenada, getCoordenada, updateCoordenada } from '../controllers/coordenada.controller.js';
import { addRuta, deleteRuta, getRutaAdd, getRutaapp, getRutaEdit, getRutaShow, updateRuta } from '../controllers/ruta.controller.js';

const router=Router()

/*router.get('/usuario',getUsers) //si ingresa a esa ruta ejecuta la funcion getUser importado desde UsuarioController
router.get('/usuario/:id',getbyId)
router.post('/usuario',addUser)
//router.put('/usuario',updateUser)
router.put('/usuario/:id',updateUser)
router.delete('/usuario/:id',delUser)*/
router.get('/usuario',getUser) //si ingresa a esa ruta ejecuta la funcion getUser importado desde UsuarioController
router.post('/usuario',addUser)
router.get('/usuario/:user',getUserById)
router.delete('/usuario/:user',deleteUser)
router.put('/usuario',updateUser)


router.get('/linea',getLinea)
router.get('/linea/:num',getLineaById)
router.post('/linea',addLinea)
router.put('/linea/:id',updateLinea)
router.delete('/linea/:id',deleteLinea)
router.get('/lineas',getLineaAll)

router.get('/bus',getBuses)// obtenemos todas las unidades
router.get('/bus/:placa',getBus)//obtenemos la unidad por placa
router.get('/buslinea/:lin',getBusLinea) // obtenemos todas las unidades de una linea
router.post('/bus',addBus)
router.put('/bus/:id',updateBus)//ponemos como parametro id la placa
router.delete('/bus/:id',deleteBus)

router.get('/lugar',getPlace)
router.post('/lugar',addPlace)
router.put('/lugar/:id',updatePlace)
router.delete('/lugar/:id',deletePlace)

//router.get('/itinerario',getItinerario)
router.get('/itinerario/:linea',getItinerLinea)
router.post('/itinerario',addItiner)
router.put('/itinerario/:id',updateItiner)
router.delete('/itinerario/:id',deleteItiner)

router.get('/parada',getParadas)
router.post('/parada',addParada)
router.delete('/parada/:id',deleteParada)
router.put('/parada/:id',updateParada)
router.get('/parada/:linea/:reco',getParadaUbic)//requiere como parametro linea y recorrido

router.get('/dia',getDia)
router.post('/dia',addDia)
router.put('/dia/:id',updateDia)
router.delete('/dia/:id',deleteDia)


//router.get('/horario',getHorario)
router.get('/horario/:linea',getHorapp)
router.post('/horario',addHorario)
router.put('/horario/:id',updateHorario)
router.delete('/horario/:id',deleteHorario)

router.get('/pasaje',getPasaje)
router.post('/pasaje',addPasaje)
router.put('/pasaje/:id',updatePasaje)
router.delete('/pasaje/:id',deletePasaje)

//router.get('/tarifa',getTarifas)
router.get('/tarifa/:linea',getTarifaLinea)//solo retorna de la tabla tarifa
router.get('/tarifaapp/:num',getTarifaapp)//retorna pasaje y desc para mostrar
router.post('/tarifa',addTarifa)
router.put('/tarifa/:id',updateTarifa)
router.delete('/tarifa/:id',deleteTarifa)

router.get('/zona',getZona)
router.post('/zona',addZona)
router.put('/zona/:id',updateZona)
router.delete('/zona/:id',deleteZona)


router.get('/destino',getDestinos)//todos los destinos
router.post('/destino',addDestino)
router.put('/destino/:id',updateDestino)
router.delete('/destino/:id',deleteDestino)
router.get('/destinos',getDestinoinner)//retorna nombre destino, zona y paradacerca
router.get('/destino/:id',searchdestin)//retorna destinos similares al buscado
router.get('/lineatodest/:id',lineastodestino)//lineas que van al destino

router.get('/coordenada',getCoordenada)
router.post('/coordenada',addCoordenada)
router.put('/coordenada/:id',updateCoordenada)
router.delete('/coordenada/:id',deleteCoordenada)

//router.get('/ruta',getRuta)
router.post('/ruta',addRuta)
router.put('/ruta/:id',updateRuta)
router.delete('/ruta/:id',deleteRuta)
router.get('/rutaapp/:lin/:rec',getRutaapp)//para app movil
router.get('/rutas/:lin',getRutaShow)//retorna solo las coordenadas de una ruta-para graficar
router.get('/rutaed/:lin/:rec',getRutaEdit)
router.get('/rutaad/:lin/:rec',getRutaAdd)



export default router