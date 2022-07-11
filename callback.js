//1
function add(a,b,callback){
    let sum = a +b
    console.log(sum)
        callback()
}

function display(){
    console.log("Hi, I am callback function")
}

add(2,3,display)

//2

function sub(j,k,call){
    var sub = j-k
    console.log(sub)
    call()
}

function show(){
    console.log("Subtracted successfully")
}

sub(5,3,show)

//3
function getMul(x,y,cal){
let mul = x*y
console.log(`The value of ${x} and the value of ${y} and multiplication is ${mul}`)
cal()
}

function showData(){
    console.log("pLease , show me data")
}

getMul(2,4,showData)

//4
var prompt = require('prompt-sync')()

function showDat(name, age){
    console.log(`Hello ${name} and your age is ${age}`)
}

function find(cal){

    var name = prompt("Enter a name")
    var age = prompt("enter age")
    cal(name,age)
}

find(showDat)

//5
//callback hell

function call1(a,callbacks){
    console.log("I am call1")
callbacks()
}

function call2(b){
    console.log(" I am callback 2")
}
function call3(c,callbacks3){
    console.log(" I am callback 3")
    callbacks3()
}

call1(2,call2)
call3(4,call2)