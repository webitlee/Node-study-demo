//导入webSocket模块
const WebSocket = require('ws');
//引用Server类：
const WebSocketServer = WebSocket.Server;
//实例化
const wss = new WebSocketServer({
    port : 250
})
//这样，我们就在250端口上打开了一个WebSocket Server，该实例由变量wss引用。
//接下来，如果有WebSocket请求接入，wss对象可以响应connection事件来处理这个WebSocket：
wss.on('connection', function(ws){
    console.log('[SERVER] connection');
    ws.on('message', function(msg){
        console.log(`[SERVER] Received : ${msg}`);
        ws.send(`[ECHO]: ${msg}`, (err) =>{
            if(err){
                console.log(`[SERVER] error: ${err}`);
            }
        })
    })

})


//客户端webSocket
let ws = new WebSocket('ws://localhost:250/test');
//打开webSocket连接后，立刻发送一条消息
ws.on('open', function(){
    console.log('client opened');
    ws.send('Hello client webSocket');
})
//响应接受到的消息
ws.on('message', function(msg){
    console.log(`[client] Received ${msg}`);
})