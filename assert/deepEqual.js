//assert(断言)
//assert.deepEqual(actual, expected[, message])
//测试 actual 参数与 expected 参数是否深度相等。 原始值使用 相等运算符（==）比较。
//只比较 可枚举的自身属性,不比较对象的 原型、连接符、或不可枚举的属性
//如果两个值不相等，则抛出一个带有 message 属性的 AssertionError，
//其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。
const assert = require('assert');
const obj1 = {
    a : {
        b : 1
    }
}
const obj2 = {
    a : {
        b : 2
    }
}
const obj3 = {
    a : {
        b : 1
    }
}

//assert.deepEqual(obj1, obj2);
//assert.deepEqual(obj1 , obj3);
assert.deepEqual(obj1, obj2, '不相等');
