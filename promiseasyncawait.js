1
const mess = () => {
    return new Promise((resolve, reject) => {
        var num = 5
        if (num == 5)
            resolve("Resolved successfully")
        else
            reject("Sorry, it is rejected")
    })
        .then((fromResolve) => {
            console.log("Ohh ye it's resolved")
        })
        .catch((fromReject) => {
            console.log("reject")
        })
}

mess()

//2
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 1000)
    })
    let result = await promise
    console.log(result)
}
f()

//3

async function up() {
    return new Promise((resolve, reject) => {
        let say = "Hello"
        if (say == "Hi") {
            setTimeout(() => {
                resolve("It is present")
            }, 1000)
        }
        else {
            reject("It is absent")
        }
    })
}

let await = up()
console.log(await)

//4

let promise = new Promise(function (resolve, reject) {
    var print = "Hello"

    if (print == "Hello") {
        resolve("sucess :)")
    }
    else {
        reject("Failed !!")
    }
})

promise.then(() => {
    console.log("Suceessfully resolved :)")
}).catch(() => {
    console.log("Failed !!!!!")
})

//5

const pr = () => {
    return new Promise((resolve, reject) => {
        var number = 5
        if (number <= 5)
            resolve("Successfull resolved")
        else
            reject("rejected")
    })
        .then((fromResolve) => {
            console.log("Ok done")
        })
        .catch((fromReject) => {
            console.log("Failed")
        })
}



