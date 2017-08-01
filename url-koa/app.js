// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
//注意导入koa-router的语句最后的()是函数调用：
const router = require('koa-router')();
// 创建一个Koa对象表示web app本身:
const app = new Koa();
// log url
app.use(async (ctx, next) =>{
    console.log(`process${ctx.request.url} ${ctx.request.method}`);
    await next();
})
//add url-router
router.get('/hello/:name', async (ctx, next) =>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello ${name}</h1>`;
})
router.get('/', async(ctx, next) =>{
    ctx.response.body='<h1>Index</h1>';
})
//add router middleware
app.use(router.routes());
// 在端口2048监听:
app.listen(2048);
console.log('app start at port 2048');