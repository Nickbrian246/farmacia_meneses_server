
const {handleHttpError}= require("../utils/handleError")
const {verifytoken}= require("../utils/handleJwt");
const {usersModels} = require ("../models")

const authMiddleware = async (req, res, next) =>{
try {
    console.log(req.headers.authorization,)
    if (!req.headers.authorization) {
        console.log(req.headers.authorization,"soy autotizacion")
        handleHttpError(res,"NOT_TOKEN",401)
        return
    }
    const token = req.headers.authorization.split(" ").pop();
    console.log("soy token desde token ", token)
    const dataToken = await verifytoken(token);
    console.log(dataToken,"soy data token")
    if(!dataToken._id){
        handleHttpError(res,"error_id_token", 401)
        return
    }
    // para saber quien se esta conectando
    const user = await usersModels.findById(dataToken._id);

    req.user = user;
    next()
} catch (error) {
    handleHttpError(res, "not_session", 401)
}
}
module.exports = {authMiddleware};