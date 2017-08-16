//assert.equal(actual, expected[, message])
//使用 相等运算符（==）测试 actual 参数与 expected 参数是否相等。
const assert = require('assert');
//通过
//assert.equal(1, "1");
//抛出 AssertionError: 1 == 2
//assert.equal(1, 2, '不相等啊');

// 抛出 AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
assert.equal({a : { b : 1}}, {a : {b : 1}}, '不相等');