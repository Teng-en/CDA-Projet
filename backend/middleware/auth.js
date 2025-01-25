const jwt = require("jsonwebtoken")
require("dotenv").config()

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        if(!payload){
            throw {
                status: 401,
                message : "Unauthorized"
            }
        }
        req.user = payload
        next()
    } catch (error){
        res.status(401).json(error)
    }
}

module.exports = auth