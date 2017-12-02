require('./connection')
const UserName = require('../models/UserName');
const ObjectId = require('mongodb').ObjectID;

const addUser = (query, callback) => {
    UserName.create(query).then(callback);
}

const findUsers= (query, callback) => {
    UserName.find(query).then(callback);
}
const findUserById = (id, callback) => {
    UserName.findById(id).then(callback);
} 


module.exports = { addUser,findUsers,findUserById };