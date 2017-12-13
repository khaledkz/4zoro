const User = require('../../models/user');
// const ObjectId = require('mongodb').ObjectID;
const bcrypt = require('bcryptjs');

createUser = (query, Successcallback) => {
    bcryptCallback = (err, salt) => {
        hashCallback = (err, hash) => {
            query.password = hash;
            User.create(query).then(Successcallback);
        }
        bcrypt.hash(query.password, salt, hashCallback);
    }
    bcrypt.genSalt(10, bcryptCallback);
}

comparePassword = (candidatePassword, hash, callback) => {

    bcryptCallback = (err, isMatch) => {

        if (err) throw err;
        callback(null, isMatch);
    };

    bcrypt.compare(candidatePassword, hash, bcryptCallback);
}
 
 
getUserByUsername = (username, callback) => {
	const query = { username: username };
	User.findOne(query, callback);
}

getUserById=(userId,callback)=>{
    User.findById(userId,callback);
}

module.exports = { createUser, comparePassword, getUserByUsername,getUserById };