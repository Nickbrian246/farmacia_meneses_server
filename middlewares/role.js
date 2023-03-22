const {handleHttpError} = require("../utils/handleError");

const checkRol = (rol) => (req, res, next) => {
    try {
        const {user} = req;
        const roleByUser = user.role; 
        console.log(roleByUser)
        const checkValueRol = rol.some((rolSingle) => roleByUser.includes(rolSingle))
        if(!checkValueRol) return  handleHttpError(res,"error usuario no tiene permisos de administrador",403);

    
        next()
    } catch (error) {
        handleHttpError(res,"error de role",403)    
    }
}

module.exports= {checkRol}