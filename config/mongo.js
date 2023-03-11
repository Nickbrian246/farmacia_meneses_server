const mongoose = require("mongoose");

const dbConnect =  ()=> {
    // importamos la db  uri desde las viables de entorno 
    console.log("hola desde la funcion");
    const DB_URI =process.env.DB_URI;
    //metodo para  hacer la conexion
    // primer parametro url de la base de datos
    // segundo parametro los parametros  de configuracion  de mongoose 
    // nos regresa un callback con un error o la respuesta exitosa
    mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=> console.log(`connected to mongo`))
      .catch(err => console.log(err));
    
    
}
module.exports = dbConnect;
