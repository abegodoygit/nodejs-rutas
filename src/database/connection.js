import sql from 'mssql'
import config from '../config'

const dbSettings={
user:config.dbUser,
password:config.dbPassword,
server:config.dbServer,
database:config.dbDatabase,
/*user:'AbeGoodVar_SQLLogin_1',
password:'8imv6anfof',
server:'rutasDB.mssql.somee.com',
//server:'DBappRutas1.mssql.somee.com',
//database:'DBappRutas1',
database:'rutasDB',*/
options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export async function getConnection(){
try{
 const pool=await sql.connect(dbSettings)
   return pool 
   //const result=await pool.request().query('SELECT 1')
  // console.log(result)
}catch(error){
    console.error(error);
}
  
}

export {sql};

//getConnection()
