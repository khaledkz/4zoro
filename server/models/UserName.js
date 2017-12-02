const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
     username:String,
     image:String,
     numberOfArticles:{
         type:Number,
         default:0
     },
     stars:Number,
     joinedDate:String,
     block:Boolean,
     temporaryBlock:Boolean
});

const Users = mongoose.model('zoroUsers', schema);

module.exports = Users;
