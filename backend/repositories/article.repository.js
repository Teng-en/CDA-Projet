const Article = require("../models/Article")
const {where} = require("sequelize");

const saveArticle = async (articleData) => {
    return await Article.create(articleData)
}

const getArticleById = async (articleId) => {
    try{
        const article = await Article.findOne({where : {id : articleId}})
        if (!article) {
            return null
        }
        return article.dataValues
    } catch (error) {
        throw new Error("Article innexistant")
    }
}

const updateArticle = async (articleId, articleData) => {
    return await Article.update(articleData,
        {where: {
            id : articleId
            }
        })
}

const deleteArticle = async (articleId) => {
    return await Article.destroy(
        {where: {
                id : articleId
            }
        })
}


module.exports = {saveArticle, updateArticle, deleteArticle, getArticleById}