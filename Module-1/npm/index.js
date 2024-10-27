import chalk from "chalk"

console.log(chalk.blue("Hello everyone"))
console.log(chalk.red("Hello everyone"))

console.log(chalk.blue.bgRed.bold("Hello everyone"))

console.log(chalk.green("I am a green line" +
    chalk.blue.underline.bold(" with a blue subString ") +
    "that becomes green again!!!"))