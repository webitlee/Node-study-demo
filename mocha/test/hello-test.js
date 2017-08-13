const assert = require('assert');
const sum = require('../hello');
//编写测试的原则是，一次只测一种情况，且测试代码要非常简单。我们编写多个测试来分别测试不同的输入，并使用assert判断输出是否是我们所期望的。

//这里我们使用mocha默认的BDD-style的测试。describe可以任意嵌套，以便把相关测试看成一组测试
describe('#hello.js', () =>{
    describe('#sum()', () =>{
        //每个it("name", function() {...})就代表一个测试。
        it('sum should return 0', () =>{
            assert.strictEqual(sum(), 0);
        })
        it('sum should return 1', () =>{
            assert.strictEqual(sum(1), 1);
        })
        it('sum should return 3', () =>{
            assert.strictEqual(sum(1, 2), 3);
        })
        it('sum should return 6', () =>{
            assert.strictEqual(sum(1, 2, 3), 6);
        })
    })
})

//运行测试步骤
//1.我们在package.json中添加npm命令：
/*
 "scripts": {
    "test": "mocha"
  },
*/
//然后在mocha目录下执行命令：
//d:\...\hello-test> npm test