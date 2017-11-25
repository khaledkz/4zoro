require('./connection')
const Article= require('../models/Category');

const addCategory=(query,callback)=>{
    Article.create(query).then(callback);
}
const findCategory=(query,callback)=>{
    Article.find(query).then(callback);
}

module.exports= {addCategory,findCategory};