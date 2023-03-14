const {storageModel} =require("../models");

const createItem = (req, res) =>{
    //obtener mas info del archivo asi como el nombre de como se guardo
const {body, file }= req
    res.send({file})
}

module.exports ={createItem};