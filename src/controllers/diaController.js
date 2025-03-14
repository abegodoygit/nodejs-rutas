import {sql, getConnection,queries} from '../database'

export const getDia=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getdia)  
    res.json(result.recordset) 
    } catch (error) {
        //res.status(500)
        res.send(false)
       // res.send(error.message)
    }
}

export const addDia=async(req,res)=>{
    const {nombre_ds}= req.body
    try {
    const pool= await getConnection();
    await pool.request()   
   .input("day",sql.VarChar,nombre_ds)   
   .query(queries.adddia)
    //res.json({dia})
    res.send(true)
    } catch (error) {
        //res.status(500)
        res.send(error.message)
        //res.send(false)
    }
}
export const updateDia=async(req,res)=>{
   // const {diaId,nombre_ds}= req.body
   const {nombre_ds}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    await pool.request()
    //.input("Id",sql.TinyInt,diaId)
    .input("day",sql.VarChar,nombre_ds) 
    .input("Id",id) 
     .query(queries.updatedia)     
     //res.json(true)  
     res.send(true) 
    } catch (error) {
         //res.status(500)
         res.send(false)
     }  
}

export const deleteDia=async(req,res)=>{
    const {id}= req.params;
    try {
        const pool= await getConnection() 
     const result= await pool.request()
     .input("Id",id)
     .query(queries.deletedia)
     res.send(true)    
    } catch (error) {
         //res.status(500)
         //res.send(error.message)
         res.send(false)
     }   
}