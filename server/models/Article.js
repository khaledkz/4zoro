const mongoose= require("mongoose");
const {Schema}= mongoose;

const schema=new Schema({
    title:String,
    fullContent:String,
    image:{
        type:String,
        default:'http://pm1.narvii.com/5856/dac779189dc23ed6aad98d850ace0b397cc14c5a_hq.jpg'
    },
    video:String,
    date:String,
    publisherName:String,
    articleType:String,
    visible:{
        type:Boolean,
        default:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    order:Number
});

const Article= mongoose.model('zoroarticle',schema);

module.exports=Article;
