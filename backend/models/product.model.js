const mongoose=require('mongoose');
 
var productSchema=new mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:String
    },
    features:{
        type:String
    }
});

mongoose.model('product',productSchema);