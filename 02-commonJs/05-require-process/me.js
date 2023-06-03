const test = {
  name: 'test',
}

module.exports = test
// 指向函数体
console.log(arguments.callee.toString());