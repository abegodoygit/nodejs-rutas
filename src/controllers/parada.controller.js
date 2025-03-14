import {sql, getConnection,queries} from '../database'
//import querys from '../database/querys'

export const getParadas=async(req,res)=>{
    try {
       const pool= await getConnection() //llamamos a la coneccion desde database/connection
    const result= await pool.request().query(queries.getParadas) //hacemos la peticion y consulta
   // console.log(result)
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 

}

export const addParada=async(req,res)=>{
    const {nomb_pd}= req.body
    try {
    const pool= await getConnection() 
     await pool.request()  
   .input("nombrepd",sql.VarChar,nomb_pd)
   //.input("latpd",sql.VarChar,lat_pd)
  // .input("lngpd",sql.VarChar,lng_pd)   
   .query(queries.addParada)//importamos la consulta desde querys.js
   //.query('Insert into Paradero(paradaId,nomParada,description) values(@paradaId,@nomParada,@description)')
    res.send(true)
    //res.json({nomParada})
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}
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

export const deleteParada=async(req,res)=>{
    const {id}= req.params;
    try {
        const pool= await getConnection() 
     const result= await pool.request()
     .input("Id",id)
     .query(queries.delParada)
     //console.log(result)
     //res.json(result.recordset)
    res.send(true)
    } catch (error) {
        // res.status(500)
         res.send(false)
     }    
    
        //res.send(204)  
    }

    export const updateParada=async(req,res)=>{
        const {nomb_pd}= req.body
        //const {paradaId,nomParada,description}= req.body
        const {id}= req.params;
        try {
        const pool= await getConnection() 
         const result= await pool.request()
        //.input("Id",sql.Int,paradId)   
         .input("nombrepd",sql.VarChar,nomb_pd)
         .input("Id",id) 
         //.input("latpd",sql.VarChar,lat_pd)
        // .input("lngpd",sql.VarChar,lng_pd)         
         .query(queries.updateParad)
         //console.log(status)
         res.send(true)
         //res.json({id,nomParada})
        
        } catch (error) {
             res.status(500)
             res.send(false)
         }    
        
           
        }


 export const getParadaUbic=async(req,res)=>{//solicitamos el nombre y su ubicacion
    const {linea, reco}= req.params;
    try {
     const pool= await getConnection()
    const result= await pool.request()
    .input("lin",linea)
    .input("rec",reco)
    .query(queries.getParadaUbic) 
    res.json(result.recordset)  
           
    } catch (error) {
        res.status(500)
         res.send(error.message)
     }  
}



 // npm run dev