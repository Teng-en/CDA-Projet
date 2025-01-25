const sequelize = require("../config/db")
const {DataTypes} = require("sequelize")

const Article = sequelize.define("Article", {
    id:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title:{
        type : DataTypes.STRING(45),
        allowNull: false
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    image:{
        type : DataTypes.STRING,
    }
})

module.exports = Article