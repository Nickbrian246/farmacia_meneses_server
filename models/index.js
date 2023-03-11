// esto lo hacemos asi por que 
//de esta manera dependiendo del motor que este usando 
//sql o no sql puede usar el modelo todo esto de manera dinamica
const models = {
    usersModels:require("./noSql/users"),
    tracksModels:require("./noSql/tracks"),
    storageModels:require("./noSql/storage"),
};

module.exports = models