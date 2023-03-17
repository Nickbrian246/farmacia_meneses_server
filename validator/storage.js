// importamos la funcion check de validator
const {check} = require("express-validator");
const {validateResults} = require("../utils/handleValidator")



const validationGetItem =[
    
    check("id").exists().notEmpty().isMongoId(),
    (req,res,next) => {
        //validacion 
        return validateResults(req,res,next)
    }
];
const validationUpdateItem =[
    
    check("id").exists().notEmpty().isMongoId(),
    (req,res,next) => {
        //validacion 
        return validateResults(req,res,next)
    }
];
module.exports= {
    validationGetItem,
}
