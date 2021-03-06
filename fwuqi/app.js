var express = require('express');
var bodyParser = require("body-parser");  //post传参用的
var app = express();
var cors = require('cors');
var fs = require('fs');
// 同样的，只支持开发环境跨域
if(process.env.NODE_ENV == 'development'){
    app.use(cors());
}
//设置跨域访问
app.use(function (req, res, next) {
// 设置cors跨域
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By", ' 3.2.1')
res.header("Content-Type", "application/json;charset=utf-8");
next();
})
app.get('/auth/:id/:password', function(req, res) {
    res.send({id:req.params.id, name: req.params.password});
});

var mysql = require('mysql');

// app.use(bodyParser.urlencoded({ extended: false }));  //post传参用的urlencoded解析body中的urlencoded字符
// //handle request entity too large
// app.json({limit: '5mb'});
app.use(bodyParser.json({limit: '50mb'}));//处理大的数据
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//配置模块
var settings = require('./settings');
//连接数据库
var connection = mysql.createConnection(settings.db);
connection.connect();
app.post('/pai', function(req, res) {
    var img= req.body.img;
    console.log(img,'111');
    var fs = require('fs');//写入到服务器中
　　　　 var path = 'imgs/' + Date.now() +'.png';//从app.js级开始找--在我的项目工程里是这样的
    var base64 = img.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
    var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
    console.log('dataBuffer是否是Buffer对象：'+Buffer.isBuffer(dataBuffer));
    fs.writeFile(path,dataBuffer,function(err){//用fs写入文件
        // console.log(''path);
        if(err){
            console.log(err);
        }else{
            console.log('写入成功！'+path);
            var charu = "INSERT INTO song (id, images) VALUE (3,?)";
            connection.query(charu, [path],function(err, rows) {
                console.log('返回的data：'+rows)
            })
        }
    })
})    


// app.get('/tu', function(req, res) {
//     fs.readdir("./imgs/", function (err, files) {//读取文件夹下文件  
//     var count = files.length,  
//         results =new Array() ;  
//     files.forEach(function (filename) {  
//         fs.readFile(filename, function (data) {  
//             var tmpResult={};  
//             tmpResult["imageName"]=filename;  
//             tmpResult["imagePath"] = "./imgs/"+filename;  
//             results[count-1]=tmpResult ;  
//             count--;  
//             if (count <= 0) {  
//                 console.log(results); 
//                  // res.send('http://10.9.1.4:3100/') ;
//                 //console.log(results[0].imageName);  
//             }  
//         });  
//     });  
// }); 
// })

// //读取数据
// // app.get('/imgs/', function(req, res) {
//     fs.readdir("./imgs/", function (err, files) {//读取文件夹下文件  
//         var count = files.length,  
//             results =new Array();  
//             console.log(files,111)
//         files.forEach(function (filename) {  

//                 fs.readFile('./imgs/'+filename,'binary',function(err, file) {
//                     if (err) {
//                         console.log(err);
//                         return;
//                     }else{
//                         app.get('/imgs/'+filename, function(req, res) {
//                             res.writeHead(200, {'Content-Type': 'image/jpeg'});
//                             res.write(file,'binary');
//                             res.end();
//                             return;
//                         })
//                     }
//                 });
            
//         });  
//     }); 
// // });
// // //查询
var selectSQL = "select * from song";
app.get('/aa', function(req, res) {
    connection.query(selectSQL, function(err, rows) {
        fs.readdir("./imgs/", function (err, files) {//读取文件夹下文件  
            var count = files.length,  
                results =new Array();  
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

        if (err) throw err;
        res.send(
            data={
                code:0,
                data:rows,
                msg:"成功"
            }
        )  
        console.log(data); 
    });
});
// var arr = [];

// var charu = "INSERT INTO song ('id','images')";
// connection.query(charu,function(err, rows){
//     app.post('/charu', function(req, res){
//         var images = req.body.images;
//         if(images){
//                 res.send(
//                     data={
//                         code:0,
//                         // data:rows,
//                         msg:"成功"
//                     }                
//                 );
//         }
//     });
// })
//关闭连接
// connection.end();



app.listen(3000,function(){
	console.log('111')
});