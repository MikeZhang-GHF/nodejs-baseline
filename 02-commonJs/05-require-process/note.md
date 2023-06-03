-   require

```js
function require(file) {
	// 1. 将相对路径变成绝对路径
	let absolutePath = path.resolve(__dirname, file);
	// 2. 判断是否有缓存
	if (cache[absolutePath]) {
		return cache[absolutePath];
	}
	// 3. 读取文件内容
	let code = fs.readFileSync(absolutePath, 'utf8').toString();
	// 4. 将文件内容放到一个函数中，进行执行
	let module = {};
	let exports = module.exports = {};
  (function (exports, require, module,__filename, __dirname
	) {
		const test = {
			name: 'test',
		};

		module.exports = test;
		// 指向函数体
		console.log(arguments.callee.toString());
	}))(exports, require, module,__filename, __dirname
  );
  // 5. 将文件内容缓存起来
  cache[absolutePath] = module.exports;
  // 6. 返回文件内容
  return module.exports;
}

const m = require('./me.js');
```
