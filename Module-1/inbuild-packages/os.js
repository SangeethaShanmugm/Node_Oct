const os = require("os")

console.log(os.platform())
console.log(os.release())
// console.log(os.cpus())

console.log(os.totalmem() / 1024 / 1024 / 1024)
console.log(os.freemem() / 1024 / 1024 / 1024)

//1kb => 1024 bytes, 1mb => 1024 kb, 1gb => 1024 mb

console.log(os.arch())

