import {sql, getConnection,queries} from '../database'

export const getHorario=async(req,res)=>{
    try {
       const pool= await getConnection()
    const result= await pool.request().query(queries.gethorar)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
export const getHorapp=async(req,res)=>{
    const {num}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("Id",num)     
     .query(queries.gethorapp)

     res.json(result.recordset) 
    } catch (error) {
         res.status(500)
         res.send(error.message)
     }  
    }

export const addHorario=async(req,res)=>{
    const {HoraInicio,HoraFinal,hdia,hlinea}= req.body
    try {
        const pool= await getConnection() 
     await pool.request()   
   .input("inicio",sql.VarChar,HoraInicio)
   .input("fin",sql.VarChar,HoraFinal)
   .input("dia",sql.TinyInt,hdia)
   .input("linea",sql.SmallInt,hlinea) 
   .query(queries.addhorar)
    res.send(true)
    //res.json({hlinea})
    } catch (error) {
        //res.status(500)
        res.send(false)  
    }
}

export const deleteHorario=async(req,res)=>{
    const {id}= req.params;
    try {
        const pool= await getConnection() 
     const result= await pool.request()
     .input("Id",id)
     .query(queries.deletehorar)
     res.send(true)    
    } catch (error) {
         res.status(500)
         res.send(false)
     }   
}

export const updateHorario=async(req,res)=>{
    //const {nhoraId,HoraInicio,HoraFinal,hdia,hlinea}= req.body
    //const {HoraInicio,HoraFinal,hdia,hlinea}= req.body
    const {HoraInicio,HoraFinal}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
     //const result= await pool.request()
     await pool.request()
     //.input("Id",sql.Int,nhoraId)
     .input("inicio",sql.VarChar,HoraInicio)
     .input("fin",sql.VarChar,HoraFinal)
     //.input("dia",sql.TinyInt,hdia)
     //.input("linea",sql.SmallInt,hlinea)
     .input("Id",id)    
     .query(queries.updatehorar)
     
     res.send(true)  
    } catch (error) {
        // res.status(500)
         res.send(error)
     }  
}