const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const parser = require('koa-bodyparser');
router.get('/', async (ctx, next) => {
     ctx.response.body = `<h1>Index</h1>
        <form action="/data" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
})
router.post('/data', async (ctx, next) => {
    var name = ctx.request.body.name || '';
    var psw = ctx.request.body.password || '';
    if(name === 'koa' && psw === '123456'){
        ctx.response.body = `<h1>Hello ${name}</h1>`;
        return;
    }
    ctx.reponse.body = '<h1>登录失败</1><a href="/">重试</a>';

})
app.use(parser());
app.use(router.routes());

app.listen(300);
console.log('started listen at port 300');