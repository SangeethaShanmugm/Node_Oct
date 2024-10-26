var buffer1 = Buffer.from("123456789")
var buffer2 = Buffer.from("HELLO")

console.log(buffer1.toString())
console.log(buffer2.toString())

var result = buffer2.copy(buffer1, 2)
// copying buffer2 into buffer1 starting index 2 => 12HELLO89 =>
// 1   2  3  4  5  6  7  8  9
// 0   1  2  3  4  5  6  7  8 => index  
// 1   2  H  E  L  L  O  8  9
console.log(result) //return how many bytes or char is copied => 5

console.log("After copy")
console.log(buffer1.toString())//12HELLO89
console.log(buffer2.toString())//HELLO


console.log(Buffer.concat([buffer1, buffer2]).toString())//12HELLO89HELLO

console.log(buffer1.equals(buffer2))

console.log(Buffer.compare(buffer2, buffer1))

// 123 < 456 => small
// return 0 => both are same
// return -1 => if buffer1 > buffer2
// return 1 => if buffer1 < buffer2