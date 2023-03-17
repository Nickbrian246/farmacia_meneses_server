const {storageModels} =require("../models");
const {matchedData}= require("express-validator")
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req,res) => {
    // de esta menera le digo que me traiga todo
    // esto devuelve una promesa
    try {
        const data = await  storageModels.find({})
        res.send({data});
    } catch (error) {
        handleHttpError(res,"error en getitem de storage")
    }
    
};
const getItem = async (req,res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await  storageModels.findById(id)
        res.send({data});

    } catch (error) {
        handleHttpError(res, "error en get item de storage")
    }

};
const updateItem = async(req,res) => {
    try {
        // al hacerlo de esta forma tendriamos dos objts uno con el id
        // y otro con la informacion que vamos a actualizar
        const {id,...body} = matchedData(req);

        
             // findOneAndUpdate
             //primer argumento es el query sentencia de busqueda
        const data = await storageModels.findOneAndUpdate(id,body)
        res.send({data})
    } catch (error) {
        handleHttpError(res,"error en update de storage")
    }
};
const deleteItem = async(req,res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        // dado que la base de dats de mongo crea en automatico una _id lo buscamos asi 
        const data = await  storageModels.delete({_id:id})
        res.send({data});       

    } catch (error) {
        console.log(error)
        handleHttpError(res, "error en delete item de storage")
    }
};

const createItem = async (req, res) =>{
    //obtener mas info del archivo asi como el nombre de como se guardo
    // creando el  archivo en el servidor 
    // usando nuestro modelo
const {file }= req
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

module.exports ={
    createItem,
    getItem,
    getItems,
    deleteItem,
    updateItem,
};