import {sql, getConnection,queries} from '../database'

export const getPlace=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getplace)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const addPlace=async(req,res)=>{
    //const {nombre_lg,ldist}= req.body
    const {nombre_lg}= req.body
    try {
    const pool= await getConnection();
    await pool.request()   
   .input("nombrelg",sql.VarChar,nombre_lg)
   //.input("distrito",sql.TinyInt,ldist)    
   .query(queries.addlugar)
    res.send(true)
    //res.json({nomlugar})
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}

export const updatePlace=async(req,res)=>{
    const {nombre_lg}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    const result= await pool.request()
    .input("nombrelg",sql.VarChar,nombre_lg)         
    .input("Id",sql.Int,id)
     .query(queries.updatelugar)
     
     res.send(true)  
    } catch (error) {
         res.status(500)
         res.send(false)
     }  
}

/*
export const updatePlace=async(req,res)=>{
    const {nomlugar,ldist}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    const result= await pool.request()
    .input("name",sql.VarChar,nomlugar)
    .input("distrito",sql.TinyInt,ldist)      
    .input("Id",sql.Int,id)
     .query(queries.updateplace)
     
     res.json({nomlugar})    
    } catch (error) {
         res.status(500)
         res.send(status)
     }  
}*/

export const deletePlace=async(req,res)=>{
    const {id}= req.params;
    try {
     const pool= await getConnection() 
     const result= await pool.request()
     .input("Id",id)
     .query(queries.dellugar)  
     res.send(true)  
    } catch (error) {
         res.status(500)
         res.send(false)
     }   
}