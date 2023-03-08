const mongoose = require("mongoose");

const dbConnect = async ()=> {
    // importamos la db  uri desde las viables de entorno 
    const DB_URI =process.env.DB_URI;
    //metodo para  hacer la conexion
    // primer parametro url de la base de datos
    // segundo parametro los parametros  de configuracion  de mongoose 
    // nos regresa un callback con un error o la respuesta exitosa
    mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }, (err, resp) => {
        if (!err) {
            console.log("***conexion correct");
        }else {
            console.log("no se pudo hacer la conexion");
        }
        console.log(resp)
    })
    
}
module.exports = dbConnect;
