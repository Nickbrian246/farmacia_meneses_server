const bcryptjs = require("bcryptjs");

// funcion que encripta
// un hash es la version encriptada de nuestra contra
// salt terminalogia para darle alietoriedad a una encriptacion
// nuemro de veces que aplica la funcion para aleatoriedad  
const encrypt =  async(passwordPlane) => {
const hash = await bcryptjs.hash(passwordPlane,10);
return hash;
}
// funcion que compara para saber si ese hash si es la clave
// lo que hace es comparar la contra con la contra encriptada
// para saber si si es la encriptda
const compare =  async (passwordPlane, hashPassword) => {
    return await bcryptjs.compare(passwordPlane, hashPassword);
}
module.exports= {
    encrypt,
    compare
}