var assert = require("assert")

var result = assert.strictEqual(4, 4, "it is equal")
console.log("it is equal")//4 == 4

var obj1 = { a: 1, b: 2 }
var obj2 = { a: 1, b: 2 }
console.log(assert.deepStrictEqual(obj1, obj2, "Objects are deeply equal"))

console.log(assert.ok(1, "Value is truthy"))
console.log(assert.ok(1, "Value is falsy"))