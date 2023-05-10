const mongoose=require("mongoose");
 
const Schema=mongoose.Schema;
const otp=new Schema({
    Name: { type: String, required: true},
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    OTP:{type:String,required:true}

})
module.exports=mongoose.model("OTPDATA",otp);