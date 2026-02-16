//Primitive 
String, Number, Boolean, null, undefined, Symbol, BigInt

//Non-Primitive or Refernce 
const heros =["Major Sandeep unikrishnan","Major Mohit Sharma","Leutinant Vikram bhatra"]

// console.log (heros)
// console.log (typeof heros)

let main = {
    name :'Major Sandeep unikrishnan',
    age : 21
}
// console.log (main)
// console.log (typeof main)


const myfun=function(){
    console.log ("hello world")
}
//  console.log (myfun)
//  console.log (typeof myfun)


let id= Symbol("12")
let id2= Symbol("12")
let id3= Symbol("12")

// console.log (id)
// console.log (id2)
// console.log (id == id2)
// console.log (id === id2 ===id3)
// console.log (typeof id)
// console.log (typeof id2)



//Stack and Heap 
//Stack
let  devanshu = "coder"
let myusername = devanshu
myusername = "beginner"
// console.log  (myusername)
// console.log  (devanshu)

//Heap
let yash ={
    position:"senior  developer",
    age:25
}

let yash1=yash
yash1.position ="TL"

console.log (yash.position)
console.log (yash1.position)
