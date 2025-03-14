import {sql, getConnection,queries} from '../database'

export const getUser=async(req,res)=>{
   
    try {
       const pool= await getConnection()
    const result= await pool.request().query(queries.getusers)  
    res.json(result.recordset) 
    } catch (error) {
        res.send(false) 
    }    

}
export const addUser=async(req,res)=>{
    const {usuar,clave,nombre,apellidos,correo,foto,tipo_cuenta}= req.body
    try {
        const pool= await getConnection() 
     await pool.request()   
   .input("user",sql.VarChar,usuar)
   .input("pass",sql.VarChar,clave)
   .input("name",sql.VarChar,nombre)
   .input("lname",sql.VarChar,apellidos)
   .input("email",sql.VarChar,correo)
   .input("photo",sql.VarChar,foto)
   .input("cuenta",sql.VarChar,tipo_cuenta)  
   .query(queries.adduser)

    //res.json({nombre})
    res.send(true)
    } catch (error) {
        //res.status(500)
       // res.send(error.message) 
       res.send(false) 
    }
}

export const getUserById=async(req,res)=>{
    const {user}= req.params;
    try {
    const pool= await getConnection()
    const result= await pool.request()
     .input("Usu",user)
     .query(queries.getuserByid)  
     res.send(result.recordset[0])
    } catch (error) {
        res.send(false) 
     }  
}
export const deleteUser=async(req,res)=>{
    const {user}= req.params;
    try {
        const pool= await getConnection() 
     const result= await pool.request()
     .input("Usu",user)
     .query(queries.deleteuser)
         res.send(true)
    } catch (error) {
        res.send(false) 
     }   
}

export const updateUser=async(req,res)=>{
    const {usuar,clave,nombre,apellidos,correo,foto,tipo_cuenta}= req.body    
    //const {curuser}= req.params;
    try {
    const pool= await getConnection() 
      await pool.request()
    //  .input("cUsu",curuseruser)
     .input("user",sql.VarChar,usuar)
     .input("pass",sql.VarChar,clave)
     .input("name",sql.VarChar,nombre)
     .input("lname",sql.VarChar,apellidos)
     .input("email",sql.VarChar,correo)
     .input("photo",sql.VarChar,foto)
     .input("cuenta",sql.VarChar,tipo_cuenta)
     //.input("Usu",sql.VarChar,user)     
     .query(queries.updateuser)
     
     //res.json({nombre,apellidos}) 
     res.send(true)   
    } catch (error) {
        res.send(false) 
     }  
}