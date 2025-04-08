import {sql, getConnection,queries} from '../database'

export const getUnidad=async(req,res)=>{
    try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getunidad)  
    res.json(result.recordset) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
        console.log('no se cambia')
    }
}

export const addUnidad=async(req,res)=>{
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
   .query(queries.addunidad)
    res.send(true)
    //res.json({placa_ut})
    } catch (error) {
        res.status(500)
        res.send(false)  
    }
}
export const updateUnidad=async(req,res)=>{
    const {año_ut,categ_ut,marca_ut,estado_ut,propietar_ut,
        capac_ut,tipo_ut}= req.body
  //const {id}= req.params;
  const {id}= req.params;
    try {
    const pool= await getConnection() 
    const result= await pool.request()
   // .input("placa",sql.VarChar,placa_ut)
    .input("year",sql.VarChar,año_ut)
    .input("categ",sql.VarChar,categ_ut)
    .input("marca",sql.VarChar,marca_ut)
    .input("estado",sql.VarChar,estado_ut)
    .input("propiet",sql.VarChar,propietar_ut)
    .input("capac",sql.TinyInt,capac_ut)
    .input("tipo",sql.VarChar,tipo_ut)
    //.input("lati",sql.VarChar,current_lat)
    //.input("lngi",sql.VarChar,current_lng)
    //.input("linea",sql.SmallInt,linea_ut)
    .input("id",id)   
    .query(queries.updateunidad);
    res.send(true)     
     //res.json({placa_ut})    
    } catch (error) {
         res.status(500)
         res.send(false)
     }  
}

export const deleteUnidad=async(req,res)=>{
    const {id}= req.params;
    try {
     const pool= await getConnection() 
     const result= await pool.request()
     .input("Id",id)
     .query(queries.deleteunidad);
     res.send(true)    
    } catch (error) {
         res.status(500)
         res.send(false)
     }   
}

export const getUnidadesLinea=async(req,res)=>{
    const {lin}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("num",lin)     
     .query(queries.getunidadesLinea)

     res.json(result.recordset) 
    } catch (error) {
         res.status(500)
         res.send(error.message)
     }  
    }

    export const getUnidadDet=async(req,res)=>{
        const {placa}= req.params;
        try {
        const pool= await getConnection()
        const result= await pool.request()
         .input("placa",placa)     
         .query(queries.getunidadByplaca)
    
         res.json(result.recordset[0]) 
        } catch (error) {
             res.status(500)
             res.send(error.message)
         }  
        }