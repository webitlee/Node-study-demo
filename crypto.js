//MD5加密
// const crypto = require('crypto');
// const hash = crypto.createHash('md5');
// //可任意多次调用update();
// hash.update('Hello World ');
// hash.update('Hello Node');
// console.log(hash.digest('hex')); 

//Hmac加密
// const crypto = require('crypto');
// const hmac = crypto.createHmac('sha256', 'secret-key');
// hmac.update('Hello, World! ');
// hmac.update('Hello, Node.js');
// console.log(hmac.digest('hex'));

//AES加密
const crypto = require('crypto');
function aesEncrypt(data, key){
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf-8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
function aesDecrypt(encrypted, key){
    const decipher = crypto.createCipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}
var data = 'Hello world';
var key = 'password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);
console.log(encrypted);
console.log(decrypted);

