const fs = require("fs")

console.log("Hello Everyone😀")

const quote = "Make everyday a little less ordinarily😀";

// fs.writeFileSync("awesome.html", quote)

//callback function => function inside another function

// fs.writeFile("fun.pdf", quote, () => {
//     console.log("File written successfully")
// })

const quote2 = "Live more, worry Less"

for (let i = 1; i <= 10; i++) {
    fs.writeFile(`./backup/text-${i}.html`, quote2, () => {
        console.log(`File written successfully for text-${i}.html`)
    })
}
//text-1.html, text-2.html, text-3.html...text-10.html

for (let i = 1; i <= 10; i++) {
    fs.writeFileSync(`./backup/text-${i}.html`, quote2)
    console.log(`File written successfully for text-${i}.html`)
}