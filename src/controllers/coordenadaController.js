import {sql, getConnection,queries} from '../database'

export const getCoordenada=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getcoord)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const addCoordenada=async(req,res)=>{
    const {coordId,lat_cor,lng_cor,parada_cor}= req.body
    try {
    const pool= await getConnection();
    await pool.request()   
    .input("idcoord",sql.Int,coordId)
   .input("latitud",sql.VarChar,lat_cor)
   .input("longitud",sql.VarChar,lng_cor) 
   .input("parada",sql.Int,parada_cor)  
   .query(queries.addcoord)
        res.send(true)
    //res.json({parad})
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}
export const updateCoordenada=async(req,res)=>{
    //const {coordId,lat_cor,lng_cor,parada_cor}= req.body
    const {lat_cor,lng_cor,parada_cor}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    const result= await pool.request()
   // .input("Id",sql.Int,coordId)
    .input("latitud",sql.VarChar,lat_cor)
    .input("longitud",sql.VarChar,lng_cor) 
    .input("parada",sql.Int,parada_cor)
    .input("Id",id)
     .query(queries.updatecoord)
     
    // res.json({parad})
    res.send(true)    
    } catch (error) {
         res.status(500)
         res.send(false)
     }  
}

export const deleteCoordenada=async(req,res)=>{
    const {id}= req.params;
    try {
    const pool= await getConnection() 
     const result= await pool.request()
     .input("Id",id)
     .query(queries.deletecoord)
     res.send(true)    
    } catch (error) {
         //res.status(500)
         res.send(false)
     }   
}