//如果嫌在浏览器中输入JavaScript代码比较麻烦，我们还可以直接用ws模块提供的WebSocket来充当客户端。
//换句话说，ws模块既包含了服务器端，又包含了客户端。
//ws的WebSocket就表示客户端，它其实就是WebSocketServer响应connection事件时回调函数传入的变量ws的类型。
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