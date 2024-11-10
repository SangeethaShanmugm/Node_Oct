const users = (name) => {
    name.forEach((nm) => {
        // console.log(nm)
    })
}
const usr = ['john', 'jack']
users(usr)

//callback abstraction

function fetchData(callback) {
    setTimeout(() => {
        const data = { message: "Data fetches successfully" }
        callback(null, data)
    }, 3000)
}

function handleData(err, data) {
    if (err) console.log(err)
    console.log(data)
}
// fetchData(handleData)


//callback chaining 

function timeToDelay(sec, callback) {
    setTimeout(callback, sec * 2000)
}

console.log("Start Timer")

//Pyramid of Doom / callback hell => Inversion of control
// timeToDelay(2, () => {
//     console.log("Two Seconds")
//     timeToDelay(3, () => {
//         console.log("Three Seconds")
//         timeToDelay(4, () => {
//             console.log("Four Seconds")
//             timeToDelay(5, () => {
//                 console.log("Five Seconds")
//             })
//         })
//     })
// })

//promise => object => {K:V}

let text = "hello123"

const promise = new Promise((resolve, reject) => {
    if (text == "hello") {
        resolve("There is a text")
    } else {
        reject("There is no text")
    }
})

// console.log(promise)


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("Operation succeeded")
        } else {
            reject("Operation failed")
        }
    }, 2000)
});

myPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.error(error)
})

//promise chaining => .then(), error => .catch()

createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateOrderSection(paymentInfo))
    .then((paymentInfo) => updateWallet(paymentInfo))
