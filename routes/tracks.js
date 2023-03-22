const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middlewares/session");
const {checkRol} = require("../middlewares/role");
const { 
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
} = require("../controllers/tracks");
const {
    validationCreateItem,
    validationGetItem,
    validationUpdateItem
} = require("../validator/tracks");



router.get("/",
    authMiddleware,
    getItems
    );
// check role necesita que auth existe
// aqui le decimos que solo el admin puede hacer un metodo post
router.post("/",
    authMiddleware,
    checkRol(["admin"]),
    validationCreateItem,
    createItem
    );
// en este caso queremos obtener uno solo por detalle es decir por id
// en caso de que queramos meter mas parametros podemos meterlos de lasig manera
// "/:id/:var2/:var3" etc
router.get("/:id",
    validationGetItem,
    getItem);
// hacemos uso de dos middleware debido a que el primero es para 
// revisar que venga correctamente el id del producto que buscamos actualizar 
//y el segundo es para verificar que nos venga la data nueva
router.put("/:id",
    validationUpdateItem,
    validationCreateItem,
    updateItem
    )
router.delete("/:id",
    validationGetItem,
    deleteItem)


module.exports = router;