// importamos la funcion check de validator
const {check} = require("express-validator");
const {validateResults} = require("../utils/handleValidator")

// creamos un objeto por cada middleware que quiera aplciar 
const validationCreateItem =[
    // que exista name y que no sea vacia
    // igual podemos revisar que tan largo viene
    //con islength({min:5, max:12});
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickName").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    //una vez teniendo este debemos de devolver una respuesta dado que es
    // un middleware y ellos deben de responder ante la peticion que se esta realizando
    //sera un erroe, exitoso debe responder algo para evitar el errror de timeout
    (req,res,next) => {
        //validacion 
        return validateResults(req,res,next)
    }
];

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
    validationCreateItem,
    validationGetItem,
    validationUpdateItem
}
