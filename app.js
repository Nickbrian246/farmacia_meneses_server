require("dotenv").config()
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();


app.use(cors());
// de esta manera le indico que este prepadado para recibir 
//informacion con un post
app.use(express.json())
// conf de datos publicos 
// usando el metodo static le digo que todos los recursos 
// staticos(publicos) los obtenga de la carpeta storage
app.use(express.static("storage"));

const port= process.env.PORT || 3000;
//aqui invocamos a las rutas
// para este caso como primer parametro le colocamos un prefijo
//como segundo le pasamos la ubicacion de donde
//tenemos la ruta y lo que hara sera concatenar 
// este prefijo con el path que tenemos declarado en nuestra 
//archivo 
app.use("/api", require("./routes"));

app.listen(port, () =>{
    console.log('tu app esta conectada al puerto', port);
})

// ejecutamos la funcion  para crear la conexion
dbConnect();