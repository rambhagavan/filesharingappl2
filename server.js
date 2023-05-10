const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path=require('path');
const DB = require("./config/db.js");
require("dotenv/config");

const app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
const PORT = process.env.PORT || 3000;
DB;
app.use(express.static('./public'));
app.set('views','./views');
app.set('view engine','ejs');


app.get('/',(req,res)=>{
  res.render('login');
})
app.get('/signup',(req,res)=>{
  res.render('signup')
})
app.get('/uploadfile',(req,res)=>{
  res.render("ram");
});
app.get('/textarea',(req,res)=>{
  res.render('textarea')
})
app.use("/signup",require('./temp/signup.js'));
app.use("/otp",require('./temp/otp'));
app.use("/api/files", require("./temp/tempfile.js"));
app.use('/files',require('./temp/show'));
app.use('/files/download',require("./temp/download.js"));
app.use('/login',require('./temp/login.js'))
app.use('/dashboard',require("./dashboard/dashboard.js"));
app.use('/api/text',require('./pastebin/getpastelink.js'));
app.use("/text",require("./pastebin/gettextlink.js"));
//app.use("/text",require("./pastebin/getpastelink"))
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
