    
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
    const getItem = async (req,res) => {
        try {
            req = matchedData(req);
            const {id} = req;
            console.log(id,'soy id desde getitem')
            const data = await  tracksModels.findById(id)
            res.send({data});

        } catch (error) {
            handleHttpError(res, "error en get item")
        }

    };
    const updateItem = async(req,res) => {
        try {
            // al hacerlo de esta forma tendriamos dos objts uno con el id
            // y otro con la informacion que vamos a actualizar
            const {id,...body} = matchedData(req);

            
                 // findOneAndUpdate
                 //primer argumento es el query sentencia de busqueda
            const data = await tracksModels.findOneAndUpdate(id,body)
            res.send({data})
        } catch (error) {
            handleHttpError(res,"error en update")
        }
    };
    const deleteItem = async(req,res) => {
        try {
            req = matchedData(req);
            const {id} = req;
            // dado que la base de dats de mongo crea en automatico una _id lo buscamos asi 
            const data = await  tracksModels.delete({_id:id})
            res.send({data});       

        } catch (error) {
            console.log(error)
            handleHttpError(res, "error en delete item")
        }
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
        deleteItem,
        createItem,
    }