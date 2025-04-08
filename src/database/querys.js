export const queries= {

    getlinea:"SELECT * from Linea",
    getlineaByid: "Select* from Linea where numero=@Id",
    addlinea:"INSERT into Linea values(@number,@name,@desc,@img,@phone,@mail,@address,@canti,@colores,@lati,@lngi)",    
    deletelinea: "DELETE from Linea where numero=@Id",
    //updatelinea:"UPDATE Linea set numero=@number,name_emp=@name,desc_emp=@desc,img_emp=@img,tel_emp=@phone,email_emp=@mail,direc_emp=@address,cant_unidades=@canti,color_emp=@colores,ubic_lat=@lati,ubic_lng=@lngi where numero=@number",
    updatelinea:"UPDATE Linea set name_emp=@name,desc_emp=@desc,img_emp=@img,tel_emp=@phone,email_emp=@mail,direc_emp=@address,cant_unidades=@canti,color_emp=@colores,ubic_lat=@lati,ubic_lng=@lngi where numero=@number",
    getlineaall:"SELECT numero,name_emp from Linea",

    getusers:"select* from usuario",
    adduser:"Insert into usuario values(@user,@pass,@name,@lname,@email,@photo,@cuenta)",
    getuserByid: "Select* from usuario where usuar=@Usu",
    deleteuser: "Delete from usuario where usuar=@Usu",
    updateuser:"Update usuario set clave=@pass,nombre=@name,apellidos=@lname,correo=@email,foto=@photo where usuar=@user",
    
    getunidad:"select* from busTransporte",
    getunidadesLinea: "Select placa_ut, estado_ut from busTransporte where linea_ut=@num",
    getunidadByplaca: "Select* from busTransporte where placa_ut=@placa",
    addunidad:"Insert into busTransporte values(@placa,@year,@categ,@marca,@estado,@propiet,@capac,@tipo,@lati,@lngi,@linea)",
    //updateunidad:"Update unidadDeTransporte set placa_ut=@placa,año_ut=@year,categ_ut=@categ,marca_ut=@marca,estado_ut=@estado,propietar_ut=@propiet,capac_ut=@capac,tipo_ut=@tipo,current_lat=@lati,current_lng=@lngi,linea_ut=@linea where placa_ut=@id",
    updateunidad:"Update busTransporte set año_ut=@year,categ_ut=@categ,marca_ut=@marca,estado_ut=@estado,propietar_ut=@propiet,capac_ut=@capac,tipo_ut=@tipo where placa_ut=@id",
    deleteunidad: "Delete from busTransporte where placa_ut=@Id",

    //getunidadByid: "Select unidadId, estado_ut,placa_ut from unidadTransporte where linea_ut=@num",
    //getunidaddet: "Select* from unidadTransporte where unidadId=@Id",
    getplace:"select* from Lugar",
    addlugar:"Insert into Lugar values(@nombrelg)",
    updatelugar:"UPDATE Lugar set nombre_lg=@nombrelg where lugarId=@Id",
    dellugar: "Delete from Lugar where lugarId=@Id",

    getitiner:"SELECT* from Itinerario",
    //getitinerlinea: "select * from Itinerario where linea_it=@line order by orden_it asc",
    getitinerlinea: "select itnerarioId,recorrido_it,orden_it,nombre_lg from Itinerario inner join Lugar on Lugar.lugarId=lugar_it where linea_it=@line order by orden_it asc",
    additiner:"Insert into Itinerario values(@reco,@orde,@linea,@lugar)",
    deleteitiner: "Delete from Itinerario where itnerarioId=@Id",
    updateitiner:"Update Itinerario set recorrido_it=@ureco,orden_it=@uorde,linea_it=@ulinea,lugar_it=@ulugar where itnerarioId=@id",
    
    getParadas:"select * from Paradero",
    getParadaUbic:"select nomb_pd, lat_cor, lng_cor from Ruta inner join Coordenada on Coordenada.coordId=coord inner join Paradero on Paradero.paraderId=parada_cor where linea=@lin and recorrido=@rec and paraderId!=1",
    addParada:"Insert into Paradero values(@nombrepd)",
    //getParadaByid: "Select nomb_pd from Paradero where paraderId=@Id",
    delParada: "Delete from Paradero where paraderId=@Id",
    updateParad:"UPDATE Paradero set nomb_pd=@nombrepd where paraderId=@Id",
    
    getruta:"SELECT * from Ruta",
    addruta:"INSERT into Ruta values(@numorden,@recorrid,@paradaes,@coordenada,@rlinea)",    
    deleteruta: "DELETE from Ruta where rutaId=@Id",
    //updateruta:"UPDATE Ruta set orden=@numorden,recorrido=@recorrid,esparada=@paradaes,coord=@coordenada  where rutaId=@Id",
    updateruta:"UPDATE Ruta set orden=@numorden,coord=@coordenada where rutaId=@Id",
    getrutaapp: "Select lat_cor,lng_cor from Ruta inner join Coordenada on Coordenada.coordId=coord where linea=@idlin and recorrido=@reco order by orden asc",
    
    getrutashow: "Select recorrido,lat_cor,lng_cor from Ruta inner join Coordenada on Coordenada.coordId=coord where linea=@idlin order by orden asc",
    getrutaedit:"select rutaId,orden,recorrido,esparada,coord,lat_cor,lng_cor from Ruta inner join Coordenada on Coordenada.coordId=coord where linea=@idlin and recorrido=@reco order by orden asc",
    getrutaadd:"select coordId from Ruta inner join Coordenada on Coordenada.coordId=coord where linea=@idlin and recorrido=@reco order by orden asc",
    
    getcoord:"select* from Coordenada",
    addcoord:"Insert into Coordenada values(@idcoord,@latitud,@longitud,@parada)",   
    updatecoord:"UPDATE Coordenada set lat_cor=@latitud, lng_cor=@longitud, parada_cor=@parada where coordId=@Id",
    deletecoord: "Delete from Coordenada where coordId=@Id",

    getzona:"select* from Zona",
    addzona:"Insert into Zona values(@name)",    
    deletezona: "Delete from Zona where zonaId=@Id",
    updatezona:"UPDATE Zona set nombre_zn=@name where zonaId=@Id",

    getdestino:"select* from Destino",
    adddestino:"Insert into Destino values(@name,@zona,@parada)",   
    updatedestino:"UPDATE Destino set nombre_des=@name, zona_des=@zona, parada_des=@parada where destinoId=@Id",
    deletedestino: "Delete from Destino where destinoId=@Id",
    getdestinoinner:"select nombre_des,nombre_zn,nomb_pd from Destino inner join Zona on Zona.zonaId=zona_des inner join Paradero on Paradero.paraderId=parada_des",
   // searchdestin:"select nombre_des,nombre_zn,nomb_pd from Destino inner join Zona on Zona.zonaId=zona_des inner join Paradero on Paradero.paraderId=parada_des where nombre_des like '%%@Id%%'",
    getlineastodestin:"select linea, recorrido from ruta inner join Coordenada on Coordenada.coordId=coord where parada_cor=@Id",

    getpasaje:"select* from Pasaje",
    addpasaje:"Insert into Pasaje values(@tipo,@desc)",   
    deletepasaje: "Delete from Pasaje where pasajeId=@Id",
    updatepasaje:"UPDATE Pasaje set tipo_pj=@tipo,descr_pj=@desc where pasajeId=@Id",
  
    gettarifa:"SELECT* from Tarifa",
    addtarifa:"Insert into Tarifa values(@cost,@pasaj,@linea)",
    deletetarifa: "Delete from Tarifa where tarifaId=@Id",
   // updatetarifa:"Update Tarifa set costo=@cost,tpasaje=@pasaj,tlinea=@linea where tarifaId=@Id",
   updatetarifa:"Update Tarifa set costo=@cost where tarifaId=@Id",
    gettarifaByid: "Select* from Tarifa where tlinea=@line",
    gettarifaap:"SELECT tipo_pj,descr_pj,costo from Tarifa  inner join Pasaje on Pasaje.pasajeId=tpasaje where tlinea=@Id",

    getdia:"select* from DiaServicio",
    adddia:"Insert into DiaServicio values(@day)",    
    deletedia: "Delete from DiaServicio where diaId=@Id",
    updatedia:"UPDATE DiaServicio set nombre_ds=@day where diaId=@Id",
   
    gethorar:"SELECT* from Horario",
    addhorar:"Insert into Horario values(@inicio,@fin,@dia,@linea)",
    deletehorar: "Delete from Horario where nhoraId=@Id",
    //updatehorar:"Update Horario set HoraInicio=@inicio, HoraFinal=@fin,hdia=@dia,hlinea=@linea where nhoraId=@Id",
    updatehorar:"Update Horario set HoraInicio=@inicio, HoraFinal=@fin where nhoraId=@Id",
     gethorapp:"SELECT nombre_ds,HoraInicio,HoraFinal from Horario inner join DiaServicio on DiaServicio.diaId=hdia where hlinea=@Id"
    
    
}

