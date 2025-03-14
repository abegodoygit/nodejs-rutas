import express from 'express'
import config from './config'
//import paradasRoute from './routes/parada.route'
import allroute from './routes/all.route'
const app=express()

const cors = require('cors'); //para consumir api en desarrollo (solucionamos error de acceso al api) 
//settings
//let port=4200
app.set('port', config.port) //importamos el puerto desde el archivo config.js

//middlewares
app.use(express.json()) //config para recibir objetos en JSON
app.use(express.urlencoded({extended:false}))//para recibir datos desde formularios html
app.use(cors())

//app.use(paradasRoute,paradasRoute)
app.use(allroute,allroute)


//const cors = require('cors');
/*const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
*/



export default app
