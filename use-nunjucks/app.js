const nunjucks = require('nunjucks');
var env = new nunjucks.configure('./node/use-nunjucks/views', {
    autoescape : true,
    watch : true
})
var res = env.render('demo.html',{
    username : 'Black Lee',
    age : 18
})
console.log(res);