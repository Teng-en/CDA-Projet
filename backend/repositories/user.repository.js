const User = require("../models/User")

const updateUser = async (userId, userData) => {
    return await User.update(userData,
        {where : {
            id : userId
            }
        })
}

const deleteUser = async (userId) => {
    return await User.destroy(
        {where : {
            id : userId
            }
        })
}

const saveUser = async (userData) => {
    return await User.create(userData);
}

const getUserById = async (userId) => {
    try {
        const user = await User.findOne({where: {id : userId}})
        if (!user){
            return null;
        }
        return user.dataValues
    } catch (error){
        throw new Error("Utilisateur innexistant")
    }
}

const getUserByEmail = async (emailParam) => {
    try {
        return await User.findOne({
            where : {
                mail: emailParam
            }
        })
    } catch (error){
        return error
    }
}

module.exports = {saveUser, getUserById, updateUser, deleteUser, getUserByEmail}