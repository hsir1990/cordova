var http = require('http'),
fs = require('fs');
var express = require('express');
var app = express();
// var num = 0;
    fs.readdir("./imgs/", function (err, files) {//读取文件夹下文件  
    var count = files.length,  
        results =new Array() ;  
    files.forEach(function (filename) {  
fs.readFile('./imgs/'+filename,'binary',function(err, file) {
	if (err) {
	  console.log(err);
	  return;
	}else{
	  app.get('/imgs/'+filename, function(req, res) {
	    res.writeHead(200, {'Content-Type': 'image/jpeg'});
	    res.write(file,'binary');
	    res.end();
	    return;
	  })
	}
});
    });  
}); 
// fs.readFile('./imgs/1496627179624.png','binary',function(err, file) {
// 	if (err) {
// 	  console.log(err);
// 	  return;
// 	}else{
// 	  app.get('/aaaa', function(req, res) {
// 	    res.writeHead(200, {'Content-Type': 'image/jpeg'});
// 	    res.write(file,'binary');
// 	    res.end();
// 	    return;
// 	  })
// 	}
// });
 // http.createServer(function(req, res) {
	//     res.writeHead(200, {'Content-Type': 'image/jpeg'});
	//     res.write(file,'binary');
	//     res.end();
	//     return;
	//   }).listen(3100);
app.listen(3100,function(){
	console.log('111')
});