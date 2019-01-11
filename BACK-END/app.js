var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.status(200).send("Welcome to Home !");
});

app.listen(3000, function(err){
    if(err) throw err;
    console.log("server is running on port 3000 !");
});