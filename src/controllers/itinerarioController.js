import {sql, getConnection,queries} from '../database'

export const getItinerario=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getitiner)  
    res.json(result.recordset) 
    } catch (error) {
        res.send(false)
    }
}
export const getItinerByLinea=async(req,res)=>{
    const {linea}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
    .input("line",linea)   
     .query(queries.getitinerlinea)

     res.json(result.recordset) 
    } catch (error) {
        res.send(false)
     }  
    }
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

export const addItinerario=async(req,res)=>{
    const {recorrido_it,orden_it,linea_it,lugar_it}= req.body
    try {
        const pool= await getConnection() 
     await pool.request()   
   .input("reco",sql.TinyInt,recorrido_it)
   .input("orde",sql.SmallInt,orden_it)      
   .input("linea",sql.SmallInt,linea_it)
   .input("lugar",sql.Int,lugar_it)  
   .query(queries.additiner)

    res.send(true)
    } catch (error) {
        res.send(false)
    }
}

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

export const updateItinerario=async(req,res)=>{
    const {recorrido_it,orden_it,linea_it,lugar_it}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    const result= await pool.request()
    //.input("Id",sql.Int,itnerarioId)
    .input("ureco",sql.TinyInt,recorrido_it)
   .input("uorde",sql.SmallInt,orden_it)      
   .input("ulinea",sql.SmallInt,linea_it)
   .input("ulugar",sql.VarChar,lugar_it)  
   .input("id",id)   
     .query(queries.updateitiner)
     
     res.send(true)    
    } catch (error) {
        res.send(false)
     }  
}

export const deleteItinerario=async(req,res)=>{
    const {id}= req.params;
    try {
        const pool= await getConnection() 
     await pool.request()
     .input("Id",id)
     .query(queries.deleteitiner)
     res.send(true)    
    } catch (error) {
         //res.status(500)
         res.send(false)
     }   
}

