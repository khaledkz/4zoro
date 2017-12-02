require('./connection')
const UserName = require('../models/UserName');
const ObjectId = require('mongodb').ObjectID;

const addUser = (query, callback) => {
    UserName.create(query).then(callback);
}

const findUser= (query, callback) => {
    UserName.find(query).sort({ 'order': 1 }).then(callback);
}
const findUserById = (id, callback) => {
    UserName.findById(id).then(callback);
} 


module.exports = { addUser,findUser,findUserById };