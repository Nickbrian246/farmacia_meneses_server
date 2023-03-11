    
    
    const {tracksModels} = require("../models")
    // estas funciones recibiran lo que nos envia express
    // argumentos request y response
    

    const getItems = async (req,res) => {
        // de esta menera le digo que me traiga todo
        // esto devuelve una promesa
        const data = await  tracksModels.find({})
        res.send({data});
        
    };
    const getItem = (req,res) => {

    };
    const updateItem = (req,res) => {

    };
    const deletetem = (req,res) => {

    };
    const createItem = async (req,res) => {
        const {body} = req
    };


    module.exports= {
        getItems,
        getItem,
        updateItem,
        deletetem,
        createItem,
    }