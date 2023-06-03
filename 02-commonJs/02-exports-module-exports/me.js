const e = require("express");

function tiemo() {
    console.log('tiemo')
} 

const niejiao = () => {
    console.log('niejiao')
}

// commonJs规范
// 方法1， 使用module的属性exports暴露多个数据
// module.exports = {
//     tiemo,
//     niejiao
// }

// 方法2， 使用exports独立的变量暴露多个数据
exports.tiemo = tiemo;
exports.niejiao = niejiao;

//1. module.exports和exports的区别
// module.exports 可以暴露任意数据 exports = module.exports = {}
// require()返回的是module.exports的引用
// 不能使用exports = value的形式，因为exports是module.exports的引用，不能改变引用，只能改变引用的属性
console.log(module.exports === exports); // true
console.log(module.exports); // true