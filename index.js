// var http = require('http');

// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-type':'text/plain'});
// 	res.end("Hello Sriram 3");
// }).listen(8080,'127.0.0.1');


// console.log("Server running");


var express = require("express");

var expressServer = express();

expressServer.get("/",function(req,res){
	res.send("hello Sriram");
});

expressServer.listen(8080,function(){
	console.log("server up");

});