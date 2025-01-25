const User = require("./User")
const Article = require("./Article")
const Tag = require("./Tag")

User.belongsToMany(Article, {through : 'Favorites' })
Article.belongsToMany(User, { through : 'Favorites'})
Article.hasMany(Tag)

module.exports = {User, Article, Tag}