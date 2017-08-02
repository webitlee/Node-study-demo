'use strict';
//process.nextTick()的函数不是立即执行的，而是要等到下一次事件循环
// process.nextTick(function(){
//     console.log('nextTick callback!');
// })
// console.log('nextTick was set!');

//程序即将退出时的回调函数
// process.on('exit', function(code){
//     console.log('about to exit width code : ' + code);
// })

//判断js执行环境
// if(typeof(window) === 'undefined'){
//     console.log('node.js');
// }else{
//     console.log('browser');
// }

//异步读取文件
// var fs = require('fs');
// fs.readFile('./node/a.txt', 'utf-8', function(err, data){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

//同步读取文件
// var fs = require('fs');
// var data = fs.readFileSync('./node/a.txt', 'utf-8');
// console.log(data);

//异步写文件
// var fs = require('fs');
// var data = "hello,阿道夫大";
// fs.writeFile('./node/a.txt', data, function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('ok');
// })

//同步写文件
// var fs = require('fs');
// var data = "答复";
// fs.writeFileSync('./node/a.txt', data);

//获取文件信息
// var fs = require('fs');
// fs.stat('./node/a.txt', function(err, stat){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(stat.isFile());
//     console.log(stat.isDirectory());
//     console.log(stat.size);
//     console.log(stat.birthtime);
//     console.log(stat.mtime);
// })

//从文件流读取文本内容
// var fs = require("fs");
//打开一个流
// var rs = fs.createReadStream('./node/a.txt', 'utf-8');
// rs.on('data', function(chunk){
//     console.log(chunk);
// })
// rs.on('end', function(){
//     console.log('end');
// })
// rs.on('error', function(err){
//     console.log(`error${err}`);
// })

//以流的形式写入文件
// var fs = require('fs');
// var ws = fs.createWriteStream('./node/a.txt', 'utf-8');
// ws.write("打发打发...\n");
// ws.write("dfa");
// ws.end();

//pipe:一个Readable流和一个Writable流串起来后，所有数据自动从Readable流进入Writable流
var fs = require('fs');
var rs = fs.createReadStream('./node/a.txt');
var ws = fs.createWriteStream('./node/b.txt');
rs.pipe(ws);