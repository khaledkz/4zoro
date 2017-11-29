require('./connection')
const Category = require('../models/Category');
const ObjectId = require('mongodb').ObjectID;

const addCategory = (query, callback) => {
    Category.create(query).then(callback);
}
const findCategory = (query, callback) => {
    Category.find(query).sort({ "order": 1 }).then(callback);
}
const findById = (id, callback) => {
    Category.findById(id).then(callback);
}
const updateOne = (CategoryId, queryupdated, upsertOption, sucessCallBack) => {
    Category.update({ "_id": ObjectId(CategoryId) }, queryupdated, { upsert: upsertOption }, sucessCallBack);
}
const removeCategory = (categoryId, callback) => {
    Category.remove({ "_id": ObjectId(categoryId) }, callback)
}
module.exports = { addCategory, findCategory, updateOne, findById, removeCategory };