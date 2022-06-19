const express = require("express");
const cors = require("cors");
//const urlparser = require("url");
const app = express();
let bodyParser = require("body-parser");


// Basic Configuration
app.use(cors());
const port = process.env.PORT || 3000;
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
    console.log(__dirname+"/index.html");
  });
  app.get("/app.js", (req, res) => {
    res.sendFile(__dirname+"/app.js");
    console.log("app.ja running....................");
  });

//minification
// var fs=require('fs');
// var UglifyJS=require('uglify-js');
// var result=UglifyJS.minify(["app.js"]);
// console.log(result.code);
// fs.writeFile("output.min.js",result.code,function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("file successfully saved......")
//   }
// })







app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
