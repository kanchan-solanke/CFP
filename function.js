function add() {
    let a = 8, b = 7
    var sum = a + b
    console.log(sum)
}
add()

//2

function evenOdd() {
    let num = 5
    if (num % 2 == 0)
        console.log("Number is even")
    else
        console.log("Number is odd")
}
evenOdd()

//3
function swap() {
    let temp
    let a = 7, b = 5
    temp = a
    a = b
    b = temp
    console.log(`the value of a is ${a} and value of b is ${b}`)
}
swap()

//4

function mul(a,b){
    console.log(`the value of a is ${a} and ${b}. The multiplication ${a * b}`)
}
mul(5,4)

//5

function print(){
 let message = "Hello Kanchan"
 console.log(message)
}
print()