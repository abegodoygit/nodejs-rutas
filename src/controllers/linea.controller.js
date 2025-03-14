//import {sql, getConnection,queries} from '../database'
import { getConnection, sql } from "../database/connection.js";
import {queries} from '../database/querys.js'

export const getLinea=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getlinea)  
    res.json(result.recordset) 
    } catch (error) {
        //res.status(500)
        res.send(error.message)
    }
}

export const addLinea=async(req,res)=>{
    try {
        const {numero,name_emp,desc_emp,img_emp,tel_emp,email_emp,
        direc_emp,cant_unidades,color_emp,ubic_lat,ubic_lng}= req.body
    
    const pool= await getConnection();
    await pool.request()   
   .input("number",sql.SmallInt,numero)
   .input("name",sql.VarChar,name_emp)
   .input("desc",sql.VarChar,desc_emp)
   .input("img",sql.VarChar,img_emp)
   .input("phone",sql.VarChar,tel_emp)
   .input("mail",sql.VarChar,email_emp)
   .input("address",sql.VarChar,direc_emp)
   .input("canti",sql.SmallInt,cant_unidades)
   .input("colores",sql.VarChar,color_emp)
   .input("lati",sql.VarChar,ubic_lat)
   .input("lngi",sql.VarChar,ubic_lng)    
   .query(queries.addlinea)
    res.send(true)
    //res.json({name_emp})
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}
export const updateLinea=async(req,res)=>{
    const {id}= req.params;
    try {
    const {numero,name_emp,desc_emp,img_emp,tel_emp,email_emp,
    direc_emp,cant_unidades,color_emp,ubic_lat,ubic_lng}= req.body
    const pool= await getConnection() 
    await pool.request()
    .input("id",id)
    .input("number",sql.Int,numero)
    .input("name",sql.VarChar,name_emp)
    .input("desc",sql.VarChar,desc_emp)
    .input("img",sql.VarChar,img_emp)
    .input("phone",sql.VarChar,tel_emp)
    .input("mail",sql.VarChar,email_emp)
    .input("address",sql.VarChar,direc_emp)
    .input("canti",sql.SmallInt,cant_unidades)
    .input("colores",sql.VarChar,color_emp)
    .input("lati",sql.VarChar,ubic_lat)
    .input("lngi",sql.VarChar,ubic_lng)
    .query(queries.updatelinea);
    res.send(true)     
    } catch (error) {
         //res.status(500)
         res.send(false)
         console.log(error.message)
     }  
}

export const deleteLinea=async(req,res)=>{
    const {id}= req.params;
    try {
     const pool= await getConnection() 
     const result= await pool.request()
     .input("id",id)
     .query(queries.deletelinea)
     if (result.rowsAffected != 0) res.send(true)
    else res.send(false)   
    } catch (error) {
         //res.status(500)
         res.send(false)
         console.log(error.message)
     }   
}

export const getLineaById=async(req,res)=>{
    const {num}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("Id",num)     
     .query(queries.getlineaByid)
     res.json(result.recordset) 

    } catch (error) {
        res.send(false)
         //res.status(500)
         console.log(error.message)
     }  
    }

    export const getLineaAll=async(req,res)=>{
        try {
        const pool= await getConnection()
        const result= await pool.request().query(queries.getlineaall)  
        res.json(result.recordset) 
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }