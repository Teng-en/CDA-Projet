const {Sequelize} = require("sequelize")
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME, //nom de la base de données
    process.env.DB_USER, //username
    process.env.DB_PASSWORD, //password
    {
        host : "localhost",
        port : 3307,
        dialect: "mysql" //type à choisir
    }
)

//test de la connexion
sequelize.authenticate()
    .then(() => console.log("connexion ok"))
    .catch(() => console.log("connexion échouée"))

sequelize.sync()
    .then(() => console.log("Sync réussie"))
    .catch(() => console.log("Sync échouée"))

module.exports = sequelize;