//assert.ifError(value)
//如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
const assert = require('assert');
//通过
//assert.ifError(0);
//抛出 1
//assert.ifError(1);
// 抛出 Error
assert.ifError(new Error());