import { getConnection, sql } from "../database/connection.js";
import {queries} from '../database/querys.js'

export const getBuses=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getbuses)  
    res.json(result.recordset) 
    } catch (error) {
        //res.status(500)
        res.send(error.message)
    }
}

export const addBus=async(req,res)=>{
    const {placa_ut,año_ut,categ_ut,marca_ut,estado_ut,propietar_ut,
        capac_ut,tipo_ut,current_lat,current_lng,linea_ut,}= req.body
    try {
    const pool= await getConnection();
    await pool.request()   
   .input("placa",sql.VarChar,placa_ut)
   .input("year",sql.VarChar,año_ut)
   .input("categ",sql.VarChar,categ_ut)
   .input("marca",sql.VarChar,marca_ut)
   .input("estado",sql.VarChar,estado_ut)
   .input("propiet",sql.VarChar,propietar_ut)
   .input("capac",sql.TinyInt,capac_ut)
   .input("tipo",sql.VarChar,tipo_ut)
   .input("lati",sql.VarChar,current_lat)
   .input("lngi",sql.VarChar,current_lng)
   .input("linea",sql.SmallInt,linea_ut)   
   .query(queries.addbus)
    res.send(true)
    //res.json({placa_ut})
    } catch (error) {
        //res.status(500)
        res.send(false)  
    }
}
export const updateBus=async(req,res)=>{
    const {placa_ut,año_ut,categ_ut,marca_ut,estado_ut,propietar_ut,
    capac_ut,tipo_ut}= req.body;
    const {id}= req.params;
    try {
    const pool= await getConnection() 
    await pool.request()
    .input("placa",sql.VarChar,placa_ut) 
    .input("year",sql.VarChar,año_ut)
    .input("categ",sql.VarChar,categ_ut)
    .input("marca",sql.VarChar,marca_ut)
    .input("estado",sql.VarChar,estado_ut)
    .input("propiet",sql.VarChar,propietar_ut)
    .input("capac",sql.TinyInt,capac_ut)
    .input("tipo",sql.VarChar,tipo_ut) 
    .input("id",id)   
    .query(queries.updatebus);
    res.send(true)     
     //res.json({placa_ut})    
    } catch (e) {       
         res.send(false)
         console.log(e.message)
     }  
}

export const deleteBus=async(req,res)=>{   
    try {
        const {id}=req.params;
        const pool= await getConnection()
       const result= await pool.request().input("id",id).query(queries.deletebus);
        if (result.rowsAffected != 0) res.send(true)
        else res.send(false)      
    } catch (e) {
         //res.status(500)
         res.send(false)
         console.log(e.message)
     }   
}


export const getBusLinea=async(req,res)=>{
    const {lin}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("num",lin)     
     .query(queries.getbusesLinea)

     res.json(result.recordset) 
    } catch (error) {
         //res.status(500)
         res.send(error.message)
     }  
    }

    export const getBus=async(req,res)=>{
        try {
        const {placa}= req.params;
        const pool= await getConnection()
        const result= await pool.request()
         .input("placa",placa)     
         .query(queries.getbusByplaca)
    
         res.json(result.recordset) 
        } catch (error) {
             //res.status(500)
             res.send(error.message)
         }  
        }