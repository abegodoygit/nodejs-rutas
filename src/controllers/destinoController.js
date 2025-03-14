import {sql, getConnection,queries} from '../database'

export const getDestino=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getdestino)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const addDestino=async(req,res)=>{
    const {nombre_des,zona_des,parada_des}= req.body
    try {
    const pool= await getConnection();
    await pool.request()   
   .input("name",sql.VarChar,nombre_des)
   .input("zona",sql.TinyInt,zona_des) 
   .input("parada",sql.Int,parada_des)  
   .query(queries.adddestino)
    res.send(true)
    //res.json({destin})
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}
export const updateDestino=async(req,res)=>{
    const {nombre_des,zona_des,parada_des}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    const result= await pool.request()
    //.input("Id",sql.Int,destinoId)
    .input("name",sql.VarChar,nombre_des)
    .input("zona",sql.TinyInt,zona_des) 
    .input("parada",sql.Int,parada_des) 
    .input("Id",id)
    .query(queries.updatedestino)
    
     res.send(true)
     //res.json({destin})    
    } catch (error) {
         res.status(500)
         res.send(false)
     }  
}

export const deleteDestino=async(req,res)=>{
    const {id}= req.params;
    try {
    const pool= await getConnection() 
     const result= await pool.request()
     .input("Id",id)
     .query(queries.deletedestino)
     res.send(true)    
    } catch (error) {
         res.status(500)
         res.send(false)
     }   
}

export const getDestinoinner=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getdestinoinner)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


export const searchdestin=async(req,res)=>{
    //const {search}= req.params;
    const {id}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
    .input("Id",id)
    //.query(queries.searchdestin)
    .query("select nombre_des,nombre_zn,nomb_pd,paraderId from Destino inner join Zona on Zona.zonaId=zona_des inner join Paradero on Paradero.paraderId=parada_des where nombre_des like '%%"+id+"%%'")  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const lineastodestino=async(req,res)=>{
    const {id}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
    .input("Id",id)
    .query(queries.getlineastodestin)
    //.query("select nombre_des,nombre_zn,nomb_pd,paraderId from Destino inner join Zona on Zona.zonaId=zona_des inner join Paradero on Paradero.paraderId=parada_des where nombre_des like '%%"+id+"%%'")  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}