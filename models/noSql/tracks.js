const mongoose = require("mongoose");
const MongooseDelete = require("mongoose-delete");
// creacion de un esquema (una tabla en sql)
const tracksSchema = new mongoose.Schema(

    {
        //asignamos campos y sus tipos (filas y columnas en sql)
        name:{
            type:String,
        },
        album:{
            type:String,
        },
        cover:{
            type: String,
            validate:{ // validacion si no cumple x retorne un error
                validator: (req) => {
                    return true
                },
                message:"ERROR_URL",
            }
        },
        artist:{ // tenemos objeto que dentro tiene subObjetos donde se definen sus propiedades 
            // el artista es un tipo de dato que esta compuesto por otro tipo de datos 
            name: {
                type:String,
            },
            nickName:{
                type:String,
            },
            nationality:{
                type:String,
            }
        },
        duration:{
            start:{
                type:Number
            },
            end:{
                type:Number
            },
        },
        mediaId:{
            type: mongoose.Types.ObjectId,// sera un string que debe conformar un patron de id 
        },

    },
    { // creamos configuraciones como que en cada insert o update 
        // se registre la hora de cuando se modofico
        timestamps: true, // registra el creatAt, updateAt
        versionKey: false
    }
);
// dado que mongoose delete es un plugin lo colocamos de esta forma
// como arguemntos le pasamos el mongooseDelte
// y el configutacion 
//overrideMethods => sobre escribe los metodos que vienen nativos de mongoose con esta opcion del softdelete
tracksSchema.plugin(MongooseDelete,{
    overrideMethods:'all'
})
// exportamos  un modelo donde 
//primer parametro es el nombre de la coleccion (tabla)
// segundo parametro el squema 
module.exports= mongoose.model("tracks",tracksSchema);