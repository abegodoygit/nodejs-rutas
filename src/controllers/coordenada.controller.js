import { getConnection, sql } from "../database/connection.js";
import { queries } from '../database/querys.js'

export const getCoordenada = async (req, res) => {
    try {
        const con = await getConnection()
        const resp = await con.request().query(queries.getcoord)
        res.json(resp.recordset)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }

}

export const addCoordenada = async (req, res) => {
    try {
        const con = await getConnection()
        await con.request()
        .input("id",sql.Int,req.body.coordId)
        .input("lat",sql.VarChar,req.body.lat_cor)
        .input("lon",sql.VarChar,req.body.lng_cor) 
        .input("parada",sql.Int,req.body.parada_cor) 
        .query(queries.addcoord)
        res.send(true)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const updateCoordenada=async(req,res)=>{
    try {
        const con=await getConnection()
        await con.request()
        .input("id",req.params.id)
        .input("idc", req.body.coordId)
        .input("lat",sql.VarChar,req.body.lat_cor)
        .input("lon",sql.VarChar,req.body.lng_cor) 
        .input("parada",sql.Int,req.body.parada_cor)
        .query(queries.updatecoord)
        res.send(true)
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}

export const deleteCoordenada=async(req,res)=>{
    try {
        const con=await getConnection()
       const resp= await con.request().input("id",req.params.id).query(queries.delcoord)
        if(resp.rowsAffected!=0)res.send(true)
            else res.send(false)       
    } catch (e) {
        res.send(false)
        console.log(e.message)
    }
}
