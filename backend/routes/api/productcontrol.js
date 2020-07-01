const express=require('express');
const mongoose=require('mongoose');
const product=mongoose.model('product')

var router=express.Router();

router.get('/',(req,res)=>{
    res.json('sample text')
})

router.post('/',(req,res)=>{
    //insertRecord(req,res);
    insertRecord(req,res);
    console.log(req.body);

})

function insertRecord(req,res){
    var Product=new product();
    Product.name=req.body.name;
    Product.category=req.body.category;
    Product.price=req.body.price;
    Product.features=req.body.features;
    Product.save((err,doc)=>{
        if(!err)
        res.redirect('Product/list');
        else{
            console.log("Error"+err);
        }
    })

}
router.get('/list',(req,res)=>{
    res.json('Added');
})
router.get("/getdata",function(req,res){   
    product.find({},function(err,data){  
               if(err){  
                   res.send(err);  
               }  
               else{             
                   res.send(data);  
                   }  
           });  
   })  
router.get('/:id',(req,res)=>{
    product.findById(req.params.id,(err,doc)=>{
        if(!err){
            
        }
    })
});

router.post('/',(req,res)=>{
    if(req,body._id=='')
    insertRecord(req,res);
    else
   updateRecord(req,res);
})
//function updateRecord(req,res){
//    product.findOneAndUpdate(
//        {_id:req.body._id},req.body,{new:true},(err,doc)=>{
//            if(!err){res.redirect('product/list')}
//            else{
//                console.log("Error"+err)
//            }
//        }
//    )
//}

router.post('/delete',(req,res)=>{
    product.findByIdAndRemove(req.params.id,(req,res)=>{
        if(!err){
            console.log("Removed")
        }
        else{
            console.log("Error"+err)
        }
    })
})

module.exports=router;