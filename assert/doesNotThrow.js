//assert.doesNotThrow(block[, error][, message]),断言 block 函数不会抛出错误
//当 assert.doesNotThrow() 被调用时，它会立即调用 block 函数。
//如果抛出错误且错误类型与 error 参数指定的相同，则抛出 AssertionError。 
//如果错误类型不相同，或 error 参数是 undefined，则错误会被抛回给调用者

//以下例子会抛出 TypeError，因为在断言中没有匹配的错误类型：

const assert = require('assert');
/*
assert.doesNotThrow(() => {
    throw new TypeError('错误');
}, SyntaxError);
*/

//以下例子会抛出一个带有 Got unwanted exception (TypeError).. 信息的 AssertionError：
/*
assert.doesNotThrow(() =>{
    throw new SyntaxError('错误');
}, SyntaxError);
*/

//如果抛出了 AssertionError 且有给 message 参数传值，则 message 的值会被附加到 AssertionError 的信息中：
assert.doesNotThrow(() =>{
    throw new SyntaxError('错误');
}, SyntaxError, '语法错误啦');