import { getConnection, sql } from "../database/connection.js";
import { queries } from "../database/querys.js";


/*export const getItinerario=async (req,res)=>{
    try {
        const poo=await getConnection()
        const resp=await poo.request().query(queries.getitiner)
        res.json(resp.recordset)
        
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}*/

export const getItinerLinea=async(req,res)=>{
    try {
        const pool=await getConnection()
        const resul= await pool.request()
        .input("line",req.params.linea).query(queries.getitinerlinea)
        res.json(resul.recordset)
    } catch (error) {
        res.send(false)
    }
}

export const addItiner=async(req,res)=>{
    try {
        //const{recorrido_it,orden_it,linea_it,lugar_it}=req.body
        const pool=await getConnection()
        await pool.request()
        .input("reco",sql.TinyInt,req.body.recorrido_it)
        .input("orde",sql.SmallInt,req.body.orden_it)      
        .input("linea",sql.SmallInt,req.body.linea_it)
        .input("lugar",sql.Int,req.body.lugar_it)
        .query(queries.additiner)

        res.send(true)
        
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}

export  const updateItiner=async(req,res)=>{
    try {
        const pool=await getConnection()
        await pool.request()
        .input("id",req.params.id)
        .input("ureco",sql.TinyInt,req.body.recorrido_it)
        .input("uorde",sql.SmallInt,req.body.orden_it)      
        .input("ulinea",sql.SmallInt,req.body.linea_it)
        .input("ulugar",sql.Int,req.body.lugar_it)
        .query(queries.updateitiner)
        res.send(true)
        
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}

export const deleteItiner=async(req,res)=>{
    try {
        const pool= await getConnection()
        await  pool.request().input("id",req.params.id).query(queries.deleteitiner)
        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}