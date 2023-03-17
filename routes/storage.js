const express = require("express");
const {uploadMiddleware} = require("../utils/handleStorage");   
const router = express.Router();
const {validationGetItem} =require("../validator/storage")
const {
    createItem,
    getItem,
    getItems,
    updateItem,
    deleteItem,
} = require("../controllers/storage");
// el middleware se coloca aqui 
// entre la ruta y el controlador
//entre la funcion que termina manejando la respuesta de express 
//para decirle que tome un archivo que estamos enviando hacemos uso de single("nombre de la propiedad 
// en lacual viene el archivo")
///si fueran varios podriamos hacerlo con multi()
router.get("/",getItems);
router.get("/:id",validationGetItem, getItem)
router.put("/:id",validationGetItem, updateItem)
router.delete("/:id",validationGetItem,deleteItem)
router.post("/", uploadMiddleware.single("myfile"),createItem)

module.exports = router;