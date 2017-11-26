require('./connection')
const Article= require('../models/Article');
const ObjectId = require('mongodb').ObjectID;

const addArticle=(query,callback)=>{
    Article.create(query).then(callback);
}

const findArticle=(query,callback)=>{
    Article.find(query).then(callback);
}
const findById=(id,callback)=>{
    Article.findById(id).then(callback);
}
const updateOne=(articleId,query,upsertOption,sucessCallBack)=>{
    Article.update({ "_id": ObjectId(articleId) }, query, { upsert: upsertOption }, sucessCallBack);
}
const removeArticle=(articleId,callback)=>{
    Article.remove({ "_id": ObjectId(articleId) },callback)
}
 

module.exports={addArticle,findArticle,findById,updateOne,removeArticle};