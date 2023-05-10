const router=require("express").Router();
const File=require('../modules/signup')


router.post('/',async (req,res)=>{
    const {Email,Password}=req.body;
    const file=await File.findOne({Email:Email});
    if(!file ||Password!=file.Password){
     res.render('login');
    }
res.render("dashboard");
})
module.exports=router;