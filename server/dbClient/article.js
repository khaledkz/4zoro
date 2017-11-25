require('./connection')
const Article= require('../models/Article');

const addArticle=(query,callback)=>{
    Article.create(query).then(callback);
}

const findArticle=(query,callback)=>{
    Article.find(query).then(callback);
}
const findById=(id,callback)=>{
    Article.findById(id).then(callback);
}

module.exports={addArticle,findArticle,findById};