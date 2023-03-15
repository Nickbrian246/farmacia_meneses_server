const {storageModels} =require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

const createItem = async (req, res) =>{
    //obtener mas info del archivo asi como el nombre de como se guardo
    // creando el  archivo en el servidor 
    // usando nuestro modelo
const {body, file }= req
// estamos creando el objeto para que cumpla con los requisitos 
// de nuestro modelo
// de ahi se lo mandamos con create 
//ojo lo estamos recibiendo  del body 
const fileData = {
    filename: file.filename,
    url:`${PUBLIC_URL}/${file.filename}`
}
const data= await storageModels.create(fileData);
    res.send({data});
}

module.exports ={createItem};