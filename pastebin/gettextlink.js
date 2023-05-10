const router=require("express").Router();
const File=require("../modules/textarea");
router.get("/:uuid",async(req,res)=>{
  const file=await File.findOne({uuid:req.params.uuid});
  if(!file){
    res.send("some thing is wrong");
  }

console.log(file.uuid);
    res.render("textlink",{text:file.text});
})
module.exports=router;