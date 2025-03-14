
import {sql, getConnection,queries} from '../database'

export const getPasaje=async(req,res)=>{
    try {
       const pool= await getConnection()
    const result= await pool.request().query(queries.getpasaje)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const addPasaje=async(req,res)=>{
    const {tipo_pj,descr_pj}= req.body
    try {
        const pool= await getConnection() 
     await pool.request()   
   .input("tipo",sql.VarChar,tipo_pj)
   .input("desc",sql.VarChar,descr_pj) 
   .query(queries.addpasaje)
    res.send(true)
    //res.json({tipoUser})
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}
export const updatePasaje=async(req,res)=>{
    //const {pasajeId,tipo_pj,descr_pj}= req.body
    const {tipo_pj,descr_pj}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    await pool.request()
    //.input("Id",pasajeId)
    .input("tipo",sql.VarChar,tipo_pj)
   .input("desc",sql.VarChar,descr_pj)
   .input("Id",id)
    .query(queries.updatepasaje)     
     //res.json({tipoUser})
     res.send(true)   
    } catch (error) {
         res.status(500)
         res.send(false)
     }  
}

export const deletePasaje=async(req,res)=>{
    const {id}= req.params;
    try {
    const pool= await getConnection() 
     const result= await pool.request()
     .input("Id",id)
     .query(queries.deletepasaje)

     res.send(true)
    } catch (error) {
         res.status(500)
         //res.send(error.message)
         res.send(false)
     }   
}