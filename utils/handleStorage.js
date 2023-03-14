const express = require("express");
const multer  =require("multer");

//configuracion para el multer
// le dicimos a multer que haga uso del disco de almacenamiento
// le pasamos una configuracion como objeto necesita minimo dos 
// destino y nombre del archivo 
// tenemos 3 parametros requesm file y callback 
const storage = multer.diskStorage({
    destination: function(req,file, cb){
        // obtenemos ruta 
    const pathStorage = `${__dirname}/../storage`;
    // cb dos argumentos 1 error en este caso no tenemos 
    // segundo la ruta 
    cb(null, pathStorage);
    },
    // aqui es donde tenemos que poner si se va a poder sobreescribir el archivo
    // los archivos tienen extensiones como .pdf etc
    filename: function(req,file, cb){
    // obtenemos esa extencion
    const ext = file.originalname.split(".").pop(); //output ["name", "png"];
    // estariacmos concatenando el nombre del archvo con la fecha en formato unix 
    // de esta menera generamos nombre random
    
    const filename = `file-${Date.now()}.${ext}`
    cb(null, filename)

    }
})
// creamos un middleware dados que multer utiliza el storage como un middleware
// el cual es como un checkpint que esta entre la ruta y el controlador 
// le decimos que haga uso de multer y que en la propiedad storage haga uso de ese storage
// dado que llave valor son lo mismo lo dejamos como storage
const uploadMiddleware = multer({storage})

module.exports = {uploadMiddleware};