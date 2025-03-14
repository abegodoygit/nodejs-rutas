import { getConnection, sql } from "../database/connection.js";
import { queries } from "../database/querys.js";

export const getParadas = async (req, res) => {
    try {
        const pool = await getConnection() //llamamos a la coneccion desde database/connection
        const result = await pool.request().query(queries.getparadas) //hacemos la peticion y consulta
        res.json(result.recordset)
    } catch (error) {
        //res.status(500)
        res.send(false)
        console.log(error.message)
    }

}

export const addParada = async (req, res) => {
    try {
        // const {nomb_pd}= req.body
        const pool = await getConnection()
        await pool.request()
            .input("nombpd", sql.VarChar, req.body.nomb_pd)
            .query(queries.addparada)//importamos la consulta desde querys.js
        //.query('Insert into Paradero(paradaId,nomParada,description) values(@paradaId,@nomParada,@description)')
        res.send(true)

    } catch (error) {
        //res.status(500)
        res.send(false)
    }
}

export const deleteParada = async (req, res) => {
    try {
        //const {id}= req.params;
        const pool = await getConnection()
        const result = await pool.request()
            .input("id", req.params.id)
            .query(queries.delparada)
        if (result.rowsAffected != 0) res.send(true)
        else res.send(false)
    } catch (error) {
        res.send(false)
    }
    //res.send(204)  
}

export const updateParada = async (req, res) => {
    // const {nomb_pd}= req.body       
    //const {id}= req.params;
    try {
        const pool = await getConnection()
        await pool.request()
            .input("nompd", sql.VarChar, req.body.nomb_pd)
            .input("id", req.params.id)
            .query(queries.updateparad)
        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }

}

export const getParadaUbic = async (req, res) => {//solicitamos el nombre y su ubicacion
    const { linea, reco } = req.params;
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input("lin", linea)
            .input("rec", reco)
            .query(queries.getparadaUbic)
        res.json(result.recordset)

    } catch (error) {
        // res.status(500)
        res.send(false)
        console.log(error.message)
    }
}