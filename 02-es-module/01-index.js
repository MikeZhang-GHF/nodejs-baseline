// ES6 module can not mix with commonJS
// package.json "type": "module" / "commonjs"
import moduleA from "./module/moduleA.js";
import { moduleB } from "./module/moduleB.js";
// commonJs
const moduleA = require('./module/moduleA.js')

console.log(moduleA.getName());
console.log(moduleB.getName());