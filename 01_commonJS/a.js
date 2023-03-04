const test = () => console.log('test-a');
const upper = (s) => s.substring(0,1).toUpperCase() + s.substring(1);
const privateFunc = () => console.log('private func');

// export test function only one
// module.exports = test;

// method 1: export multiple functions or properties, use object
// module.exports = {
//     test,
//     upper
// }

// method 2 exports
exports.test = test;
exports.upper = upper;
