const sequelize = require("../config/db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("User", {
    id:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    mail:{
        type : DataTypes.STRING(45),
        unique: true,
        allowNull: false,
        validate: {
            isEmail : true
        }
    },
    username:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User