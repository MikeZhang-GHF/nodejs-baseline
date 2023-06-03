// 导入模块
// 1. 相对路径 ../ ./不能省略
// 2. 可以省略.js  .json后缀名, 同名js优先
const tiemo = require('./me');
// 3.其它类型文件都当做js文件处理
const test = require('./test.abc');

console.log(test);

tiemo();