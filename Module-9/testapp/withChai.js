import chai from "chai";
const { assert, expect, describe } = chai;

const name = "John Doe";
const age = 25;
const items = ["apple", "banana", "cherry"]
const user = { id: 1, name: "John Doe", age: 25 };

//using assert

assert.isString(name, "Name should be string")
assert.isNumber(age, "Age should be number")
assert.isArray(items, "items should be array")

//using expect 
expect(name).to.be.a("string").that.equals("John Doe")
expect(age).to.be.a("number").that.is.greaterThan(20).and.lessThan(30)
expect(items).to.be.a("array").that.includes("banana")
expect(user).to.have.property("name").that.equals("John Doe")
expect(user).to.include({ id: 1, age: 25 })

// describe("Testing users and item", () => {
//     it("should validate items and use properties", () => {
//         expect(items).to.be.a("array").that.includes("banana")
//         expect(user).to.have.property("name").that.equals("John Doe")
//         expect(user).to.include({ id: 1, age: 25 })
//     })
// })