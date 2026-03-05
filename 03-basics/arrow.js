// const user = {
//     username:"Devanshu ",
//     price:999,

//     greeting: function(){
//         console.log (`${this.username},welcome to website`)
//         // console.log (this)
//     }
// }

// user.greeting()
// user.username="Yash"
// user.greeting()
// console.log (this)

const username ="deva"
const username1="aktaaf"
const username2="aktaaf";
const addtwo =(num1,num2)=>{
    return num1+num2
}
console.log (addtwo (3,6));


(function IIFE (){
    console.log ("kddd")

})();


const sun=(username) => {
    console.log (`IIFE example ${username}`)
}
sun ("yash")


let val1=15
let val2=25

function add(num1,num2){
    let total =num1+num2
    return total
}

let result1=add(val1,val2)
let result2=add(11,28)

console.log (result1)
console.log (result2)

function one(){
    console.log ("onee")
    two()

}
function two(){
    console.log ("twoo")
    
}
function three(){
    console.log ("threee")
}

one()
two()
three()

const ch=()=>{
    return {username:"yash"}
}
ch()