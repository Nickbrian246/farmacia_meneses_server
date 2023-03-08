const mongoose = require("mongoose");
// creacion de un esquema (una tabla en sql)
const UserSchema = new mongoose.Schema(

    {
        //asignamos campos y sus tipos (filas y columnas en sql)
        name:{
            type:String 
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{// asiganmos roles para permisos y asi
            type:["user","admin"],
            default:"user"
        }

    },
    { // creamos configuraciones como que en cada insert o update 
        // se registre la hora de cuando se modofico
        timestamps: true, // registra el creatAt, updateAt
        versionKey: false
    }
);
// exportamos  un modelo donde 
//primer parametro es el nombre de la coleccion (tabla)
// segundo parametro el squema 
module.exports= mongoose.model("users",UserSchema);