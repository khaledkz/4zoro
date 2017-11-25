const mongoose= require("mongoose");
const {Schema}= mongoose;

const schema=new Schema({
    title:String,
    shortDescription:String,
    description:String
});

const Category= mongoose.model('zorocategory',schema);

module.exports=Category;
