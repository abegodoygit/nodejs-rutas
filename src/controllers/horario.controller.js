import { getConnection, sql } from "../database/connection.js";
import { queries } from '../database/querys.js'

//------Dia de Servicio------------------
export const getDia = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getdia)
        res.json(result.recordset)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}

export const addDia = async (req, res) => {
    try {
        const pool = await getConnection();
        await pool.request()
            .input("day", sql.VarChar, req.body.nombre_ds)
            .query(queries.adddia)
        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}
export const updateDia = async (req, res) => {
    try {
        const pool = await getConnection()
        await pool.request()
            .input("day", sql.VarChar, req.body.nombre_ds)
            .input("id", req.params.id)
            .query(queries.updatedia)
        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}

export const deleteDia = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input("id", req.params.id)
            .query(queries.deletedia)
        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}

//--------------Horario de Servicio----------
/*
export const getHorario=async(req,res)=>{
    try {
        const pool= await getConnection()
        const result= await pool.request().query(queries.gethorar)
        res.json(result.recordset) 
    } catch (error) {
        res.send(false)
        console.log(error.message) 
    }
}*/
export const getHorapp = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input("id", req.params.linea)
            .query(queries.gethorapp)
        res.json(result.recordset)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}

export const addHorario = async (req, res) => {
    const { HoraInicio, HoraFinal, hdia, hlinea } = req.body
    try {
        const pool = await getConnection()
        await pool.request()
            .input("inicio", sql.VarChar, HoraInicio)
            .input("fin", sql.VarChar, HoraFinal)
            .input("dia", sql.TinyInt, hdia)
            .input("linea", sql.SmallInt, hlinea)
            .query(queries.addhorar)
        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}


export const updateHorario = async (req, res) => {
    try {
        const pool = await getConnection()
        await pool.request()
            .input("inicio", sql.VarChar, req.body.HoraInicio)
            .input("fin", sql.VarChar, req.body.HoraFinal)
            .input("id", req.params.id)
            .query(queries.updatehorar)
        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}

export const deleteHorario = async (req, res) => {
    try {
        const pool = await getConnection()
        await pool.request()
            .input("id", req.params.id)
            .query(queries.delhorar)
        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
}
