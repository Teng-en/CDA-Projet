const userService = require("../services/user.service")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {
    const {password} = req.body;

    const hash = await bcrypt.hash(password, 10)

    const newUser = await userService.createUser({...req.body, password: hash})

    res.status(201).json(newUser)
}

const signIn = async (req, res) => {
    const {mail, password} = req.body

    try{
        const userExist = await userService.findUserByEmail(mail)
        console.log(userExist)

        const isVerif = await bcrypt.compare(password, userExist.password)

        console.log(isVerif)

        if (!isVerif){
            throw "connexion refusée"
        }

        const token = jwt.sign({
            sub : userExist.id,
            mail : userExist.mail
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "10m"
            })

        res.status(200).json({token})

    } catch (error){
        res.status(401).json({message: error})
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.id
    const userData = req.body
    try {
        const userExist = await userService.findUserById(userId)
        await userService.modifyUser(userExist.id, userData)
        res.status(200).json({message : "utilisateur modifié"})
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

const delUser = async (req, res) =>{
    const userId = req.params.id
    try{
        const userExist = await userService.findUserById(userId)
        await userService.destroyUser(userId)
        res.status(200).json({message: "utilisateur supprimé !"})
    } catch (error){
        res.status(400).json({message : error.message})
    }
}

const getProfile = (req, res) => {
    res.status(200).json({message : "ici on mange du nutella"})
}

module.exports = {signUp, signIn, getProfile, delUser, updateUser}