require('./connection')
const Article= require('../models/Article');

const addArticle=(query,callback)=>{
    Article.create(query).then(callback);
}

module.exports={addArticle};