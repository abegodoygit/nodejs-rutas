import {sql, getConnection,queries} from '../database'

export const getRuta=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getruta)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const addRuta=async(req,res)=>{
    const {orden,recorrido,esparada,coord,linea}= req.body
    try {
    const pool= await getConnection();
    await pool.request()   
   .input("numorden",sql.SmallInt,orden)
   .input("recorrid",sql.TinyInt,recorrido)
   .input("paradaes",sql.VarChar,esparada)
   .input("coordenada",sql.Int,coord)
   .input("rlinea",sql.SmallInt,linea)    
   .query(queries.addruta)
    res.send(true)
    //res.json({linea})
    } catch (error) {
       // res.status(500)
        res.send(false)  
    }
}

export const updateRuta=async(req,res)=>{
   // const {orden,recorrido,esparada,coord}= req.body
   const {orden,coord}= req.body
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    await pool.request()
    //.input("Id",sql.Int,rutaId)
    .input("numorden",sql.SmallInt,orden)
    //.input("recorrid",sql.TinyInt,recorrido)
   // .input("paradaes",sql.VarChar,esparada)
    .input("coordenada",sql.Int,coord)
    .input("Id",id)
     .query(queries.updateruta)
     res.send(true)
     //res.json({id})    
    } catch (error) {
         //res.status(500)
         res.send(false)
     }  
}

export const deleteRuta=async(req,res)=>{
    const {id}= req.params;
    try {
     const pool= await getConnection() 
     await pool.request()
     .input("Id",id)
     .query(queries.deleteruta)
     res.send(true)    
    } catch (error) {
        // res.status(500)
         res.send(false)
     }   
}

//obtenemos ruta de una linea especifica para graficar
export const getRutaShow=async(req,res)=>{
    const {lin}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("idlin",lin)     
     .query(queries.getrutashow)

     res.json(result.recordset) 
    } catch (error) {
         res.status(500)
         res.send(error.message)
     }  
    }
//obtenemos ruta de una linea y recorrido especifico para editar
    export const getRutaEdit=async(req,res)=>{
        const {lin,rec}= req.params;
        try {
        const pool= await getConnection()
        const result= await pool.request()
        .input("idlin",lin)
        .input("reco",rec)
        .query(queries.getrutaedit)

        res.json(result.recordset) 
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

   //obtenemos solo el id de una ruta de una linea y recorrido especifico para agregar
 
    export const getRutaAdd=async(req,res)=>{
        const {lin,rec}= req.params;
        try {
        const pool= await getConnection()
        const result= await pool.request()
        .input("idlin",lin)
        .input("reco",rec)
        .query(queries.getrutaadd)

        res.json(result.recordset) 
        } catch (error) {
            res.status(500)
            res.send(false)
        }
    }

    //obtenemos ruta de una linea especifica para graficar en APP
export const getRutaapp=async(req,res)=>{
    const {lin,rec}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
    .input("idlin",lin)
    .input("reco",rec)    
     .query(queries.getrutaapp)

     res.json(result.recordset) 
    } catch (error) {
         res.status(500)
         res.send(error.message)
     }  
    }