require('./connection')
const UserName = require('../models/user');
const ObjectId = require('mongodb').ObjectID;

const addUser = (query, callback) => {
    UserName.create(query).then(callback);
}

const findUsers= (query, callback) => {
    UserName.findOne(query).then(callback);
}
const findUserById = (id, callback) => {
    UserName.findById(id).then(callback);
} 


module.exports = { addUser,findUsers,findUserById};