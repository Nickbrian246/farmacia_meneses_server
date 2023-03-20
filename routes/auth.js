const express = require("express");
const router = express.Router();
const {
    validatorRegister,
    validatorLogin,
} = require("../validator/auth");
const { registerCtrl} = require("../controllers/auth");
const {loginCtrl} = require("../controllers/auth")


// la intencion es 
///tener dos rutas una de  login y otra de register
router.post("/register", validatorRegister, registerCtrl );
// controlador encargado de resgitrar un usario
router.post("/login",validatorLogin,loginCtrl)



module.exports = router;        