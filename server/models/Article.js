const mongoose= require("mongoose");
const {Schema}= mongoose;

const schema=new Schema({
    title:String,
    fullContent:String,
    visible:{
        type:Boolean,
        default:true
    }
});

const Article= mongoose.model('zoroarticle',schema);

module.exports=Article;
