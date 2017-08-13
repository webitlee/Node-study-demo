//创建sequelize对象实例
const Sequelize = require('sequelize');
const config = require('./config');
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host : config.host,
    dialect : 'mysql',
    pool : {
        max : 5,
        min : 0,
        idle : 3000
    }
})

//定义模型Pet,告诉Sequelize如何映射数据库表
var Employee = sequelize.define('employee', {
    id : {
        type : Sequelize.BIGINT,
        primaryKey : true,
        autoIncrement : true
    },
    name : Sequelize.STRING(100),
    salary : Sequelize.FLOAT(8,2),
    age : Sequelize.BIGINT
}, {
    timestamps : false
})

//向数据库中写入数据
// Employee.create({
//         id : null,
//         name : 'Lee',
//         salary : 250.41,
//         age : 19
// }).then(function(name){
//         console.log('created：' + JSON.stringify(name));
// })

//查询数据库
// Employee.findAll({
//     where : {
//         name : 'Black'
//     }
// }).then(function(data){
//     console.log(`找到${data.length}条数据`);
//     console.log(JSON.stringify(data));
// })

//更新数据库(更新前，先查询)
// Employee.findAll({
//     where : {
//         name : 'Black'
//     }
// }).then(function(data){
//     console.log(`找到${data.length}条数据`);
//     console.log(JSON.stringify(data));
//     var emp = data[0];
//     emp.age = 100;
//     emp.save();
// }).then(function(data){
//     console.log('更新数据成功');
// })

//删除数据库(删除之前先查询，然后调用destroy方法）
Employee.findAll({
    where : {
        name : 'Black'
    }
}).then(function(data){
    console.log(`找到${data.length}条数据`);
    console.log(JSON.stringify(data));
    var emp = data[0];
    emp.destroy();
}).then(function(data){
    console.log('删除数据成功');
})

//Model
//我们把通过sequelize.define()返回的Pet称为Model，它表示一个数据模型。
//我们把通过Pet.findAll()返回的一个或一组对象称为Model实例，每个实例都可以直接通过JSON.stringify序列化为JSON字符串。但是它们和普通JSON对象相比，多了一些由Sequelize添加的方法，比如save()和destroy()。调用这些方法我们可以执行更新或者删除操作。
//所以，使用Sequelize操作数据库的一般步骤就是：
//首先，通过某个Model对象的findAll()方法获取实例；
//如果要更新实例，先对实例属性赋新值，再调用save()方法；
//如果要删除实例，直接调用destroy()方法。
//注意findAll()方法可以接收where、order这些参数，这和将要生成的SQL语句是对应的。

//sequelize官网：http://docs.sequelizejs.com/