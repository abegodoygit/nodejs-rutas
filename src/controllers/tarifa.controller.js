import { getConnection, sql } from '../database/connection.js'
import { queries } from '../database/querys.js'

//------------------PASAJE-------------------
export const getPasaje = async (req, res) => {
    try {
        const con = await getConnection()
        const resp = await con.request().query(queries.getpasaje)
        res.json(resp.recordset)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }

}

export const addPasaje = async (req, res) => {
    try {
        const con = await getConnection()
        await con.request()
            .input("tipo", sql.VarChar, req.body.tipo_pj)
            .input("desc", sql.VarChar, req.body.descr_pj)
            .query(queries.addpasaje)
        res.send(true)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const updatePasaje=async(req,res)=>{
    try {
        const con=await getConnection()
        await con.request()
        .input("id",req.params.id)
        .input("tipo",sql.VarChar,req.body.tipo_pj)
        .input("desc",sql.VarChar,req.body.descr_pj)
        .query(queries.updatepasaje)
        res.send(true)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const deletePasaje=async(req,res)=>{
    try {
        const con=await getConnection()
        await con.request().input("id",req.params.id).query(queries.delpasaje)
        res.send(true)      
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

//---------------TARIFA---------------------------------

/*export const getTarifas = async (req, res) => {
    try {
        const con = await getConnection()
        const resp = await con.request().query(queries.gettars)
        res.json(resp.recordset)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }}*/

export const getTarifaLinea= async (req, res) => {
    try {
        const con = await getConnection()
        const resp = await con.request()
        .input("line",req.params.linea)
        .query(queries.gettarlinea)
        res.json(resp.recordset)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}
export const getTarifaapp= async (req, res) => {
    try {
        const con = await getConnection()
        const resp = await con.request()
        .input("id",req.params.num)
        .query(queries.gettaraap)
        res.json(resp.recordset)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const addTarifa = async (req, res) => {
    try {
        const con = await getConnection()
        await con.request()
        .input("cost",sql.Float,req.body.costo)
        .input("pasaj",sql.TinyInt,req.body.tpasaje)  
        .input("linea",sql.SmallInt,req.body.tlinea) 
        .query(queries.addtar)
        res.send(true)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}
export const updateTarifa=async(req,res)=>{
    try {
        const con=await getConnection()
        const result =await con.request()
        .input("id",req.params.id)
        .input("cost",sql.Float,req.body.costo)
        .query(queries.updatetar)
        if(result.rowsAffected!=0){
            res.send(true)
        }else res.send(false)   
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const deleteTarifa=async(req,res)=>{
    try {
        const con=await getConnection()
        const result=await con.request().input("id",req.params.id).query(queries.deltar)
        if(result.rowsAffected!=0)res.send(true)
        else res.send(false)   
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}