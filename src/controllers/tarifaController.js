import {sql, getConnection,queries} from '../database'

export const getTarifa=async(req,res)=>{
    try {
       const pool= await getConnection()
    const result= await pool.request().query(queries.gettarifa)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//para mostrar tipo y descripcion de pasaje
export const getTarifaap=async(req,res)=>{
    const {num}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("Id",num)     
     .query(queries.gettarifaap)

     res.json(result.recordset) 
    } catch (error) {
         res.status(500)
         res.send(error.message)
     }  
    }

export const addTarifa=async(req,res)=>{
    const {costo,tpasaje,tlinea}= req.body
    try {
        const pool= await getConnection() 
     await pool.request()   
   .input("cost",sql.Float,costo)
   .input("pasaj",sql.TinyInt,tpasaje)  
   .input("linea",sql.SmallInt,tlinea) 
   .query(queries.addtarifa)

    res.send(true)
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}
export const updateTarifa=async(req,res)=>{
    //const {tarifaId,costo,tpasaje,tlinea}= req.body
    //const {costo,tpasaje,tlinea}= req.body
    const {costo}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    const result= await pool.request()
    //.input("Id",sql.SmallInt,tarifaId)
    .input("cost",sql.Float,costo)
    //.input("pasaj",sql.TinyInt,tpasaje)  
    //.input("linea",sql.SmallInt,tlinea) 
    .input("Id",id)  
     .query(queries.updatetarifa)
     
     res.send(true)    
    } catch (error) {
         res.status(500)
         res.send(false)
     }  
}

export const deleteTarifa=async(req,res)=>{
    const {id}= req.params;
    try {
        const pool= await getConnection() 
     await pool.request()
     .input("Id",id)
     .query(queries.deletetarifa)
     res.send(true)    
    } catch (error) {
         res.status(500)
         res.send(false)
     }   
}

export const getTarifaByLinea=async(req,res)=>{
    const {linea}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("line",linea)
     .query(queries.gettarifaByid)  
     res.json(result.recordset)
    } catch (error) {
         res.status(500)
         res.send(error.message)
     }  
}