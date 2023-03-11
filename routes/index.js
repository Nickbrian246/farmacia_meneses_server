const express = require("express");
const router = express.Router();

//importamos fs que es file system
const fs =require("fs");

//dirname es una cosntante de node 
// que nos brinda la ruta absoluta
// esto nos dara la direccion en donde se 
// encuentra el archivo
//la direccion en mi maquina donde se encuentra eso
const PATH_ROUTES =__dirname;

//funcion que remueve el ' .' del array que nos
//regresa el readdirSync 
//por lo que quita ej .js
//con shift tomamos el primer valor del array
const romeveExtension = (fileName) => {
    //input[ 'index.js', 'traks.js' ]
    return fileName.split('.').shift()
    // output traks
}
//esta funcion lee el directorio de manera asincrona 
//como primer parametro  le pasamos el path_routes
// esto nos devolvera un array
 fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = romeveExtension(file);
    if (name !== 'index') { // si es diferente de index
        //has uso de del nomvre  del trak y 
        // para tener acceso a los controladores 
        // hacemos el require como ya es ruta colocamos el  ./
        router.use(`/${name}`, require(`./${file}`));// output hhtps://localhost:3000/api/traks
    }
 })



module.exports= router;