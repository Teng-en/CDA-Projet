const express = require("express")
const authController = require("../controllers/auth.controller")
const auth = require("../middleware/auth")

const router = express.Router()

router.get('/me', auth, authController.getProfile)
router.post('/register', authController.signUp)
router.post('/login', authController.signIn)
router.put('/:id', auth, authController.updateUser)
router.delete('/:id', auth, authController.delUser)


module.exports = router