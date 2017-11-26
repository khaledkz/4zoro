require('./connection')
const Category= require('../models/Category');
const ObjectId = require('mongodb').ObjectID;

const addCategory=(query,callback)=>{
    Category.create(query).then(callback);
}
const findCategory=(query,callback)=>{
    Category.find(query).then(callback);
}
const findById=(id,callback)=>{
    Category.findById(id).then(callback);
}
const updateOne=(CategoryId,queryupdated,upsertOption,sucessCallBack)=>{
    Category.update({ "_id": ObjectId(CategoryId) }, queryupdated, { upsert: upsertOption }, sucessCallBack);
}
module.exports= {addCategory,findCategory,updateOne,findById};