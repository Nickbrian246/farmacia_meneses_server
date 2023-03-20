const {encrypt,
    compare,
} = require ("../utils/handlePassword");
const { matchedData } = require("express-validator");
const {usersModels} = require ("../models");
const {tokenSing} = require("../utils/handleJwt");
const {handleHttpError} = require("../utils/handleError");


const registerCtrl = async(req,res) =>{
    try {
        req= matchedData(req)
    const password = await encrypt(req.password)
    // SOBRE ESCRIBIENDO LA PROPIEDAD PASSWORD EN CASO DE QUE VENGA EN EL BODY
    const body = {...req, password}
    const dataUser = await usersModels.create(body)
    // metodo findOne metodo para encontrar algo 
    // const data = await usersModels.findOne({email:"test@test3322.com"})
    // con esta forma retorno al cliente la infor pero sin la password
    dataUser.set("password", undefined, {strict:false})
    // jwt 
    // token pasamos la funcino para firmar el tojken y en user la data del usuario 
    const data = {
        token: await tokenSing(dataUser),
        user: dataUser
    }
    res.send({data})
    } catch (error) {
        console.log(error)
    handleHttpError(res, "error en registro de usuario")
    }
}
// controlador encargado de loggear una persona 
const loginCtrl = async(req, res) => {

try {
    req = matchedData(req);
    const user = await usersModels.findOne({email:req.email}).select("password email role name");
    if(!user) return handleHttpError(res, "usuario no existe",404 )
    const hashPassword= user.get("password");
    // retorna un true o un false
    const check = await compare(req.password, hashPassword)
    if(!check) return handleHttpError(res, "invalid password",402 )
    user.set('password', undefined, {strict:false})
    const data = {
        token: await tokenSing(user),
        user
    }
    res.send({data})
} catch (error) {
    console.log(error)
    handleHttpError(res, "error en login")
}



}

module.exports ={ registerCtrl,loginCtrl}