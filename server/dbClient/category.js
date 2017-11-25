require('./connection')
const Article= require('../models/Category');

const addArticle=(query,callback)=>{
    Article.create(query).then(callback);
}

module.exports= addCategory;