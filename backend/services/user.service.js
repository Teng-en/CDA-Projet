const userRepository = require("../repositories/user.repository")

const modifyUser = async (userId, userData) => {
    return await userRepository.updateUser(userId, userData)
}

const destroyUser = async (userId) =>{
    return await userRepository.deleteUser(userId)
}

const createUser = async (userData) => {
    return await userRepository.saveUser(userData)
}

const findUserById = async (userId) => {
    const user = await userRepository.getUserById(userId)
    if (!user){
        throw new Error("L'utilisateur n'existe pas")
    }
    return user
}

const findUserByEmail = async (email) => {
    return await userRepository.getUserByEmail(email)
}

module.exports = {createUser, findUserById, destroyUser, modifyUser, findUserByEmail}