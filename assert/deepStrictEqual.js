//大多数情况下与 assert.deepEqual() 一样，但有三个例外
//原始值使用 全等运算符（===）比较。使用SameValueZero比较法来比较设置的值及映射的键（也就意味不用考虑caveats）。
//对象的 原型 也使用 全等运算符 比较。
//对象的类型标签应该相同。
const assert = require('assert');
// 抛出 AssertionError: { a: 1 } deepStrictEqual { a: '1' }
//因为使用全等运算符 1 !== '1' 
// assert.deepStrictEqual({a : 1}, {a : '1'});

const date = new  Date();
var obj1 = {};
var obj2 = {};
//通过,因为原型及属性数值都'==='
assert.deepStrictEqual(obj1 ,obj2);
//Object.setPrototypeOf(obj2, Date.prototype);
//AssertionError: {} deepStrictEqual Date {}
//因为原型不相等
//assert.deepStrictEqual(obj1 ,obj2);