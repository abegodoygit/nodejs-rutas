import { getConnection, sql } from '../database/connection.js'
import { queries } from '../database/querys.js'


/*export const getRuta=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getruta)  
    res.json(result.recordset) 
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}*/

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
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}

export const updateRuta=async(req,res)=>{
    //const {orden,coord}= req.body
   // const {id}= req.params;
    try {
    const pool= await getConnection() 
    await pool.request()
    .input("numorden",sql.SmallInt,req.body.orden)
    .input("coordenada",sql.Int,req.body.coord)
    .input("id",req.params.id)
     .query(queries.updateruta)
     res.send(true)   
    } catch (error) {
        res.send(false)
        console.log(error.message)
     }  
}

export const deleteRuta=async(req,res)=>{
    //const {id}= req.params;
    try {
     const pool= await getConnection() 
     const resp=await pool.request()
     .input("id",req.params.id)
     .query(queries.delruta)
     if(resp.rowsAffected!=0)res.send(true)
     else res.send(false)  
     //res.send(true)    
    } catch (error) {
        res.send(false)
        console.log(error.message)
     }   
}

//obtenemos ruta de una linea especifica para graficar
export const getRutaShow=async(req,res)=>{
    //const {lin}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("idlin",req.params.lin)     
     .query(queries.getrutashow)
     res.json(result.recordset) 
    } catch (error) {
        res.send(false)
        console.log(error.message)
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
            res.send(false)
            console.log(error.message)
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
            res.send(false)
            console.log(error.message)
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
        res.send(false)
        console.log(error.message)
     }  
    }