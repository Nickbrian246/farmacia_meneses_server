// importamos la funcion check de validator
const {check} = require("express-validator");
const {validateResults} = require("../utils/handleValidator")



const validatorRegister=[
    check("name").exists().notEmpty().isLength({min:3,max:99}),
    check("age").exists().isNumeric(),
    check("email").exists().isEmail(),
    check("password").exists().notEmpty().isLength({min:3, max:20}),

    (req,res,next) => {
        //validacion 
        return validateResults(req,res,next)
    }
];
const validatorLogin =[
    check("email").exists().isEmail(),
    check("password").exists().notEmpty().isLength({min:3, max:20}),
    
    (req,res,next) => {
        //validacion 
        return validateResults(req,res,next)
    }
];
module.exports= {
    validatorRegister,
    validatorLogin,
}