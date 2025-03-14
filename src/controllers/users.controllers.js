import {getConnection, sql} from '../database/connection.js'
import {queries} from '../database/querys.js'
/*export const getUser=(req, res)=>{
    res.send('lista de usuarios')
}*/

export const getUsers=async(req,res)=>{
   try {
    const pool= await getConnection()
    const result= await pool.request().query(queries.getusers)  
    res.json(result.recordset) 
    } catch (error) {
        res.send(error.message)
        //console.log(error.message) 
    }    

}
export const delUser=async(req,res)=>{
    try{
        const {id}=req.params
        const pool=await getConnection()
        const result=await pool.request()
        .input("id",id)
        .query(queries.deleteuser)
        if (result.rowsAffected != 0) res.send(true)
            else res.send(false)
        //console.log('usuario eliminado')
    }catch(error){
        res.send(false)
    }
    

}

export const getbyId=async(req,res)=>{
    try{
        const {id}=req.params
        const pool=await getConnection()    
        const result= await pool.request()
        .input("id",id).query(queries.getuserByid)
        //console.log(result)
        //const find=result.recordset[0]
        res.json(result.recordset)
       /* if(find!=null){
            res.json(find)
        }else{
           res.send(false)
           console.log('Usuario no encontrado')
        }*/
        
    }catch(e){
        res.send(false)
        console.log(e)
    }
   

}

export const addUser=async(req,res)=>{   
    try {
   // const {usuar,clave,nombre,apellidos,correo,foto,tipo_cuenta}= req.body
    const pool= await getConnection() 
    await pool.request()   
   .input("user",sql.VarChar,req.body.usuar)
   .input("pass",sql.VarChar,req.body.clave)
   .input("name",sql.VarChar,req.body.nombre)
   .input("lname",sql.VarChar,req.body.apellidos)
   .input("email",sql.VarChar,req.body.correo)
   .input("photo",sql.VarChar,req.body.foto)
   .input("cuenta",sql.VarChar,req.body.tipo_cuenta)  
   .query(queries.adduser)

    //res.json({nombre})
    //res.json(result.)
    res.send(true)
    console.log('usuario registrado')
    } catch (error) {
        //res.status(500)
       // res.send(error.message) 
       res.send(false) 
    }
}


export const updateUser=async(req,res)=>{      
    
    try { 
        const {id}= req.params;
        //const {usuar,clave,nombre,apellidos,correo,foto,tipo_cuenta}= req.body 
    const pool= await getConnection() 
    await pool.request()
    .input("id",id)
     .input("user",sql.VarChar,req.body.usuar)
     .input("pass",sql.VarChar,req.body.clave)
     .input("name",sql.VarChar,req.body.nombre)
     .input("lname",sql.VarChar,req.body.apellidos)
     .input("email",sql.VarChar,req.body.correo)
     .input("photo",sql.VarChar,req.body.foto)
     .input("cuenta",sql.VarChar,req.body.tipo_cuenta)
     //.input("Usu",sql.VarChar,user)     
     .query(queries.updateuser)

     res.send(true)  
     console.log('usuario modificado') 
    } catch (error) {
        res.send(false)
        //res.send(error.message) 
      console.log('Nombre de usuario ya existe!')
     }  
}
/*
export const addUser=(req,res)=>{
    
   console.log(request.body)
   res.send('usuario creado'+req.body)
   res.json(request.body.clave)
    /*try{
        // const {usuar,clave,nombre,apellidos,correo,foto,tipo_cuenta}=req.body
        const pool=await getConnection()
        await pool.request()
        .input("user",sql.VarChar,req.body.usuar)
        .input("pass", sql.VarChar,req.body.clave)
        .input("name", sql.VarChar,req.body.nombre)
        .input("lname", sql.VarChar,req.body.apellidos)
        .input("email", sql.VarChar,req.body.correo)
        .input("photo", sql.VarChar,req.body.foto)
        .input("cuenta", sql.VarChar,req.body.tipo_cuenta)
        .query(queries.adduser)

        res.send(true)
    }catch(error){
        res.send(error.message)
    }*
    
}
*/
/*
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
}*/


/*export const deleteUser=async(req,res)=>{
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
}*/
