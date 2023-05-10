const router=require('express').Router();
const File=require("../modules/otp");
const Signupfile=require("../modules/signup");
router.post('/',async(req,res)=>{
  console.log(req.body);
 const {Email,OTP}=req.body;
 const file=await File.findOne({Email:Email});
 console.log(Email)
 console.log(file.OTP)
 console.log(OTP)
 if(OTP!=file.OTP){
    res.send("invalid otp");
 }
 
 File.deleteMany({Email:email});

  const signupfile=new Signupfile({
    Name:file.Name,
    Email:file.Email,
    Password:file.Password
  });
const response=await signupfile.save();
res.render("login")
});
module.exports=router;