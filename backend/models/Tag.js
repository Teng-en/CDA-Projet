const sequelize = require("../config/db")
const {DataTypes} = require("sequelize")

const Tag = sequelize.define("Tag", {
    id:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

module.exports = Tag