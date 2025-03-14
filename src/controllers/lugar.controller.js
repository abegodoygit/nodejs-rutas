import { getConnection, sql } from "../database/connection.js";
import { queries } from "../database/querys.js";

export const getPlace=async(req, res)=>{
    try{
     const pool=await getConnection();
    const result=await pool.request().query(queries.getlugar)
    res.json(result.recordset)   
    }catch(e){
        res.send(false)
        console.log(e.message)
       // res.send(error.message)
    }    
}

export const addPlace=async(req,res)=>{
    try{
        const pool= await getConnection();
        await pool.request()
        .input("nomb",sql.VarChar,req.body.nombre_lg)
        .query(queries.addlugar)
        res.send(true)
    }catch(e){
        res.send(false)
        console.log(e.message)
    }
}

export const updatePlace=async(req,res)=>{
    try {
        //const {id}=req.params
        const pool=await getConnection()
        await pool.request()
        .input("id",req.params.id).input("name",sql.VarChar,req.body.nombre_lg)
        .query(queries.updatelugar)

        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
} 

export const deletePlace=async(req,res)=>{
    try {
        const pool=await getConnection()
        await pool.request()
        .input("id",req.params.id)
        .query(queries.dellugar)

        res.send(true)
    } catch (error) {
        res.send(false)
        console.log(error.message)
    }
   
    
}


