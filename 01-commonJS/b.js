// import { upper } from './a';
const moduleA = require('./a');

const test = () => console.log('test-b');

console.log(moduleA.upper('sherry'));

module.exports = test;