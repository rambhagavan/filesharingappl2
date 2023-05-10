const router = require("express").Router();
const OTPDATA = require("../modules/otp");
const SignupFile=require("../modules/signup")
const otpGenerator = require("otp-generator");
router.post("/", async (req, res) => {
  const { Name, email, password, confirmpassword } = req.body;
  if (!Name || !email || !password || !password || !confirmpassword) {
    res.render("signuperr", { message: "all field are required" });
  }
  if (password != confirmpassword) {
    res.render("signuperr", {
      message: "password and confirm password must be same",
    });
  }
  const email1 = await SignupFile.findOne({ Email: email });
  
  if (email1) {
    res.render("signuperr", { message: "user already exists" });
  }
  const OTP = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
  });
  console.log(OTP);
  const file = new OTPDATA({
    Name: Name,
    Email: email,
    Password: password,
    OTP: OTP
  });
  const response=await file.save();
  const otpservices = require("../services/otpservices.js");
  otpservices({
    from:"shivaramyadav12@gmail.com",
    to: email,
    subject: "inshare verfication code",
    text: `${OTP} inshare otp`,
    html: require("../services/otptemplate")({ Name, OTP }),
  });
  res.render("otp", { message1: email });
});
module.exports = router;
