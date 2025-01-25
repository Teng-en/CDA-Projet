const articleRepository = require("../repositories/article.repository")

const createArticle = async (articleData) => {
    return await articleRepository.saveArticle(articleData)
}

const findArticleById = async (articleId) =>{
    const article = await articleRepository.getArticleById(articleId)
    if(!article){
        throw new Error("L'article n'existe pas")
    }
    return article
}

const modifyArticle = async (articleId, articleData) => {
    return await articleRepository.updateArticle(articleId, articleData)
}

const destroyArticle = async (articleId) => {
    return await articleRepository.deleteArticle(articleId)
}

module.exports = {createArticle, modifyArticle, destroyArticle, findArticleById}