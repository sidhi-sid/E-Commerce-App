const express=require('express');
const app=express();
const path=require('path');
const bodyparser=require('body-parser')
require('./models/db');
const productcontrol=require('./routes/api/productcontrol');
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

app.use('/product',productcontrol);

app.listen(5000,(req,res)=>{
    console.log("server running")
})