const express = require("express");
const router = require("express").Router();
const multer = require("multer");
//var bodyParser = require('body-parser')
const path = require("path");
const Files = require("../modules/file");
const { v4: uuid4 } = require("uuid");

const app = express();

const stoarge = multer.diskStorage({
  destination: function(req, file, cb){ 
    console.log("rma");
    return cb(null, "./uploads")},
  filename: function(req, file, cb) {
    // const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(
    //   file.originalname)}`;
    
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
    //return cb(null, uniqueName);
  },
});

const upload = multer({
  stoarge: stoarge,
  limit: { fileSize: 1000000 * 100 }
 
}).single('myfile');
console.log('ram')
router.post('/',(req, res) => {

  
  upload(req, res,  (err) => {
    
    if (!req.file) {
      return res.json({ error: "all fileds are require" });
    }
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    //console.log(req.file.buffer.toString)
    const file = new Files({
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      uuid: uuid4()
      });
    const response =  file.save();
    return res.json({
      file: `${process.env.APP_BASE_URL}/files/${response.uuid}`,
    });
    
 });
});
module.exports = router;
