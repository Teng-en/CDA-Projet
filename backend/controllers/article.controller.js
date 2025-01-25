const articleService = require("../services/article.service")

const showArticle = async (req, res) => {
    res.status(200).json({message : 'ca montre les article'})
}
const createArticle = async (req, res) => {
   try {
       const newArticle = await articleService.createArticle({...req.body})
       res.status(201).json(newArticle)
   } catch (error){
       res.status(400).json({message : error.message})
   }
}

const updateArticle = async (req, res) => {
    const articleId = req.params.id
    const articleData = req.body
    try{
        const articleExist = await articleService.findArticleById(articleId)
        await articleService.modifyArticle(articleExist.id, articleData)
        res.status(200).json({message : "article modifié !"})
    }catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deleteArticle = async (req, res) => {
    const articleId = req.params.id
    try{
        const articleExist = await articleService.findArticleById(articleId)
        await articleService.destroyArticle(articleExist.id)
        res.status(200).json({message : "article supprimé !"})
    }catch (error) {
        res.status(400).json({message: error.message})
    }
}

// const addToFavoriteArticle = async (req, res) => {
//     res.status(200).json({message : "ajoute un article au favoris"})
// }
module.exports = {showArticle, createArticle, updateArticle, deleteArticle}