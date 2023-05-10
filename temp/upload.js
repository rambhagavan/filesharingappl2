const router=require("express").Router();



router.post('/',async (req,res)=>{
    
res.render("ram");
})
module.exports=router;