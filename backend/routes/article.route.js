const express = require("express")
const articleController = require("../controllers/article.controller")
const auth = require("../middleware/auth")

const router = express.Router()

router.get('/', articleController.showArticle)
router.post('/', articleController.createArticle)
router.put('/:id', articleController.updateArticle)
router.delete('/:id', articleController.deleteArticle)

module.exports = router