'use strict';
//导入http模块
// var http = require('http');
// //创建http server,并传入回调函数
// var server = http.createServer(function(request, response){
//     //回调函数request\response对象
//     //获取HTTP请求的method和url
//     console.log(request.method + ':' + request.url);
//     //将HTTP响应200写入response,同时设置Content-Type:text/html:
//     response.writeHead(200, {'Content-Type' : 'text/html'});
//     //将HTTP响应的HTML内容写入response
//     response.end('<h1>Hello World!</h1>');
// })
// //让服务器监听8080端口
// server.listen(8088);
// console.log('Server is running at http://127.0.0.1:8088');

//解析url
// var url = require('url');
// console.log(url.parse('https://www.baidu.com:80/#hash'));

//处理本地文件目录
// var path = require('path');
// var workDir = path.resolve('.');
// var filePath = path.join(workDir, 'pub', 'a.html');
// console.log(filePath);

//实现文件服务器
var fs = require('fs');
var path = require('path');
var url = require('url');
var http = require('http');
var root = path.resolve('./node');
//创建服务器
var server = http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname;
    var filePath = path.join(root, pathName);
    console.log(filePath);
    //获取文件状态
    fs.stat(filePath, function(err, stats){
        if(!err && stats.isFile()){
            response.writeHead('200');
            fs.createReadStream(filePath).pipe(response);
            return;
        }
        //出错了或文件不存在
        console.log(`404 ${request.url}`);
        //发送404响应
        response.writeHead('404');
        response.end('404 File Not Found');
    })
})
server.listen(8088);
console.log('Server is running at http://localhotst:8088');