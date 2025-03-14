import {sql, getConnection,queries} from '../database'

export const getZona=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getzona)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const addZona=async(req,res)=>{
    const {nombre_zn}= req.body
    try {
    const pool= await getConnection();
    await pool.request()   
   .input("name",sql.VarChar,nombre_zn)   
   .query(queries.addzona)
    res.send(true)
   // res.json({nomdistrito})
    } catch (error) {
        res.status(500)
        res.send(error.message)  
    }
}
export const updateZona=async(req,res)=>{
    const {nombre_zn}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    await pool.request()
    //.input("Id",sql.TinyInt,zonaId)
    .input("name",sql.VarChar,nombre_zn) 
    .input("Id",id)   
     .query(queries.updatezona)

     res.send(true)
     //res.json({nomdistrito})    
    } catch (error) {
         res.status(500)
         res.send(false)
     }  
}

export const deleteZona=async(req,res)=>{
    const {id}= req.params;
    try {
        const pool= await getConnection() 
     const result= await pool.request()
     .input("Id",id)
     .query(queries.deletezona)
     res.send(true)   
    } catch (error) {
         res.status(500)
         res.send(false)
     }   
}