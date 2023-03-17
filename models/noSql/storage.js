const mongoose = require("mongoose");
const MongooseDelete = require("mongoose-delete");
// creacion de un esquema (una tabla en sql)
const UserStorage = new mongoose.Schema(

    {
        //asignamos campos y sus tipos (filas y columnas en sql)
        url:{
            type:String 
        },
        fileName:{
            type:String
        },
    

    },
    { // creamos configuraciones como que en cada insert o update 
        // se registre la hora de cuando se modofico
        timestamps: true, // registra el creatAt, updateAt
        versionKey: false
    }
);
UserStorage.plugin(MongooseDelete,{
    overrideMethods:'all'
})
// exportamos  un modelo donde 
//primer parametro es el nombre de la coleccion (tabla)
// segundo parametro el squema 
module.exports= mongoose.model("storage",UserStorage);