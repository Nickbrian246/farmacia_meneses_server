    
    const {handleHttpError} = require("../utils/handleError");
    const {tracksModels} = require("../models");
const { matchedData } = require("express-validator");
    // estas funciones recibiran lo que nos envia express
    // argumentos request y response
    

    const getItems = async (req,res) => {
        // de esta menera le digo que me traiga todo
        // esto devuelve una promesa
        try {
            const data = await  tracksModels.find({})
            res.send({data});
        } catch (error) {
            handleHttpError(res,"error en getitem")
        }
        
    };
    const getItem = (req,res) => {

    };
    const updateItem = (req,res) => {

    };
    const deletetem = (req,res) => {

    };
    const createItem = async (req,res) => {
    try {
        const body = matchedData(req);
             // la funcion mathedData de express-validator filtra solo los datos que si cumplan 
          // de esta manera creamos un nuevo modelo
          // el equivalente a una tabla en sql 
        const data = await tracksModels.create(body)
        res.send({data})
    } catch (error) {
        handleHttpError(res,"error en createItem")
    }
    };


    module.exports= {
        getItems,
        getItem,
        updateItem,
        deletetem,
        createItem,
    }