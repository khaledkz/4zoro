const mongoose= require("mongoose");
const {Schema}= mongoose;

const schema=new Schema({
    title:String,
    fullContent:String
});

const Article= mongoose.model('zoroarticle',schema);

module.exports=Article;
