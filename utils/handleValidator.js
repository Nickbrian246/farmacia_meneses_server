const {validationResult} = require("express-validator");

const validateResults = (req, res, next) => {
    //validacion
    try {
        // "validationResult(req) " valida que todo venga bien 
        // en caso de no cumplir el throw hace que se rompa 
        //  y ahi es donde entra el catch
        validationResult(req).throw();
        //continua hacia el controlador
        return  next();
        
    } catch (err) {
        // 403 no permitido
        res.status(403)
        // retorno un status y un arraw con los errores 
        res.send({errors: err.array()})
    }
}
module.exports= {validateResults};