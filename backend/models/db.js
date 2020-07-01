const mongoose=require('mongoose');
require('./product.model');

mongoose.connect('mongodb://localhost:27017/productsDB',{useNewUrlParser:true},(err)=>{
    if(!err){console.log('MongoDB connection succeeded')}
    else{console.log('Error in DB connection'+err)}
})