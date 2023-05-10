const express = require("express");
const bodyParser = require("body-parser");
const router=require("express").Router();
const { v4: uuid4 } = require("uuid");
const Text=require("../modules/textarea")
const app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
router.post('/',async(req,res)=>{
   const text=new Text({
    uuid:uuid4(),
    text:req.body.Textdata
   })
   console.log(req.body.Textdata);
const response=await text.save();
res.render('gettextlink',{downloadLink:`${process.env.APP_BASE_URL}/text/${response.uuid}`,uuid:response.uuid})
});
router.post('/send',async(req,res)=>{
 
    const {uuid,emailto}=req.body;
   
   const emailfrom="<inshare@gamil.com>"
  let a=emailto;
  
  if(!uuid ||!emailto){
       res.status(422).send({error:'all fields are required'});
    }
   const text=await Text.findOne({uuid:uuid});
   
    
    const downloadLink=`${process.env.APP_BASE_URL}/text/${text.uuid}`
    //send email
    const sendMail=require("../services/emailservices");
    sendMail({from:emailfrom,
    to:emailto,
    subject:'inshare file sharing',
    text:`${emailfrom} shared a file with you`,
    html:require("../services/emailtemplate")({
       emailfrom:emailfrom,
       downloadLink:downloadLink,
       size:parseInt(1000/1000)+'KB',
       expires:'24'
    })
    
  
  })
//   console.log(`${process.env.APP_BASE_URL}/files/${file.uuid}`);
  res.send("email is sent");
  })
  module.exports = router;
  
module.exports=router;
// router.post('/',(req,res)=>{
//   //console.log(req.body);
//   let text=req.body.textdata;
//   console.log(text);
//   res.send("hii ram");
// })
// module.exports=router;