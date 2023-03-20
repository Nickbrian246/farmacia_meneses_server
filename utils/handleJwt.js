const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// generar token
// 3 metodos generar firmar el token 

// recibe un objeto el del usuario
// retorn el token jwt no tiene nada que ver con el hash del password
const tokenSing = async(user)=> {
    // pasamos el payload
    //que esta compuesto por el id
    const sign =  jwt.sign({
        _id: user._id,
        role:user.role
    },
        JWT_SECRET,
    {
        // fecha de expiracion
        expiresIn:"2h",
    }
    );
    return sign
};

// recibe el token de sesion
const verifytoken = async(tokenJwt)=> {
    try {
        return jwt.verify(tokenJwt,JWT_SECRET)
    } catch (error) {
        return null
    }
};
module.exports = {
    tokenSing,
    verifytoken,
}