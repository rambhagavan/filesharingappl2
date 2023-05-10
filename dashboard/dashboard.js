const router=require('express').Router();

router.post('/',(req,res)=>{
    res.render("dashboard");
})
module.exports=router;