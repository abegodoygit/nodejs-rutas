import { getConnection, sql } from "../database/connection.js";
import { queries } from '../database/querys.js'

//------------------ZONA-------------------
export const getZona = async (req, res) => {
    try {
        const con = await getConnection()
        const resp = await con.request().query(queries.getzona)
        res.json(resp.recordset)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }

}

export const addZona = async (req, res) => {
    try {
        const con = await getConnection()
        await con.request().input("name",sql.VarChar,req.body.nombre_zn).query(queries.addzona)
        res.send(true)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const updateZona=async(req,res)=>{
    try {
        const con=await getConnection()
        await con.request()
        .input("id",req.params.id)
        .input("name",sql.VarChar,req.body.nombre_zn)   
        .query(queries.updatezona)
        res.send(true)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const deleteZona=async(req,res)=>{
    try {
        const con=await getConnection()
        await con.request().input("id",req.params.id).query(queries.delzona)
        res.send(true)      
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

//---------------DESTINO---------------------------------

export const getDestinos = async (req, res) => {
    try {
        const con = await getConnection()
        const resp = await con.request().query(queries.getdestino)
        res.json(resp.recordset)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }}


export const addDestino = async (req, res) => {
    try {
        const con = await getConnection()
        await con.request()
        .input("name",sql.VarChar,req.body.nombre_des)
        .input("zona",sql.TinyInt,req.body.zona_des) 
        .input("parada",sql.Int,req.body.parada_des) 
        .query(queries.adddestino)
        res.send(true)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}
export const updateDestino=async(req,res)=>{
    try {
        const con=await getConnection()
        await con.request()
        .input("id",req.params.id)
        .input("name",sql.VarChar,req.body.nombre_des)
        .input("zona",sql.TinyInt,req.body.zona_des) 
        .input("parada",sql.Int,req.body.parada_des)
        .query(queries.updatedestino)
        res.send(true)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const deleteDestino=async(req,res)=>{
    try {
        const con=await getConnection()
       const resp= await con.request().input("id",req.params.id).query(queries.deldestino)
       if(resp.rowsAffected!=0)res.send(true)
        else res.send(false)          
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const getDestinoinner=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getdestinoinner)  
    res.json(result.recordset) 
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}
export const searchdestin=async(req,res)=>{
    const {id}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
    .input("id",id)
    //.query(queries.searchdestin)
    .query("select nombre_des,nombre_zn,nomb_pd,paraderId from Destino inner join Zona on Zona.zonaId=zona_des inner join Paradero on Paradero.paraderId=parada_des where nombre_des like '%%"+id+"%%'")  
    res.json(result.recordset) 
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const lineastodestino=async(req,res)=>{
   // const {id}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
    .input("id",req.params.id)
    .query(queries.getlineastodestin)
    res.json(result.recordset) 
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}